const fs = require("fs");
const path = require("path");
const asyncHandler = require("express-async-handler");
const {
  Product,
  validateCreateProduct,
  validateUpdateProduct,
} = require("../models/productModel");
const {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
} = require("../utils/cloudinary");
const { Comment } = require("../models/commentModel");

/**-----------------------------------------------
 * @desc    Create New Product
 * @route   /api/products
 * @method  POST
 * @access  private (only logged in user)
 ------------------------------------------------*/
module.exports.createProduct = asyncHandler(async (req, res) => {
  // 1. Validation for image
  if (!req.file) {
    return res.status(400).json({ message: "no image provided" });
  }

  // 2. Validation for data
  const { error } = validateCreateProduct(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // 3. Upload photo
  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  const result = await cloudinaryUploadImage(imagePath);

  // 4. Create new product and save it to DB
  const product = await Product.create({
    company: req.body.company,
    model: req.body.model,
    operatingSystem: req.body.operatingSystem,
    processorCompany: req.body.processorCompany,
    processorModel: req.body.processorModel,
    graphicCard: req.body.graphicCard,
    display: req.body.display,
    memory: req.body.memory,
    storage: req.body.storage,
    description: req.body.description,
    price: req.body.price,
    user: req.user.id,
    image: {
      url: result.secure_url,
      publicId: result.public_id,
    },
  });

  // 5. Send response to the client
  res.status(201).json(product);

  // 6. Remove image from the server
  fs.unlinkSync(imagePath);
});

/**-----------------------------------------------
 * @desc    Get All Products
 * @route   /api/products
 * @method  GET
 * @access  public
 ------------------------------------------------*/
module.exports.getAllProducts = asyncHandler(async (req, res) => {
  const PRODUCT_PER_PAGE = 3;
  const { pageNumber, category } = req.query;
  let products;

  if (pageNumber) {
    products = await Product.find()
      .skip((pageNumber - 1) * PRODUCT_PER_PAGE)
      .limit(PRODUCT_PER_PAGE)
      .sort({ createdAt: -1 })
      .populate("user", ["-password"]);
  } else if (category) {
    products = await Product.find({ category })
      .sort({ createdAt: -1 })
      .populate("user", ["-password"]);
  } else {
    products = await Product.find()
      .sort({ createdAt: -1 })
      .populate("user", ["-password"]);
  }
  res.status(200).json(products);
});

/**-----------------------------------------------
 * @desc    Get Single Product
 * @route   /api/products/:id
 * @method  GET
 * @access  public
 ------------------------------------------------*/
module.exports.getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate("user", ["-password"])
    .populate("comments");

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  res.status(200).json(product);
});

/**-----------------------------------------------
 * @desc    Get Products Count
 * @route   /api/products/count
 * @method  GET
 * @access  public
 ------------------------------------------------*/
module.exports.getProductCount = asyncHandler(async (req, res) => {
  const count = await Product.count();
  res.status(200).json(count);
});

/**-----------------------------------------------
 * @desc    Delete product
 * @route   /api/products/:id
 * @method  DELETE
 * @access  private (only admin or owner of the product)
 ------------------------------------------------*/
module.exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  if (req.user.isAdmin || req.user.id === product.user.toString()) {
    await Product.findByIdAndDelete(req.params.id);
    await cloudinaryRemoveImage(product.image.publicId);

    // Delete all comments that belong to this product
    await Comment.deleteMany({ productId: product._id });

    res.status(200).json({
      message: "product has been deleted successfully",
      productId: product._id,
    });
  } else {
    res.status(403).json({ message: "access denied, forbidden" });
  }
});

/**-----------------------------------------------
 * @desc    Update product
 * @route   /api/products/:id
 * @method  PUT
 * @access  private (only owner of the product)
 ------------------------------------------------*/
module.exports.updateProduct = asyncHandler(async (req, res) => {
  // 1. Validation
  const { error } = validateUpdateProduct(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // 2. Get the product from DB and check if product exist
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  // 3. check if this product belong to logged in user
  if (req.user.id !== product.user.toString()) {
    return res
      .status(403)
      .json({ message: "access denied, you are not allowed" });
  }

  // 4. Update product
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        company: req.body.company,
        model: req.body.model,
        operating_system: req.body.operating_system,
        processor_company: req.body.processor_company,
        processor_model: req.body.processor_model,
        graphic_card: req.body.graphic_card,
        display: req.body.display,
        memory: req.body.memory,
        storage: req.body.storage,
        description: req.body.description,
        price: req.body.price,
      },
    },
    { new: true }
  )
    .populate("user", ["-password"])
    .populate("comments");

  // 5. Send response to the client
  res.status(200).json(updatedProduct);
});

/**-----------------------------------------------
 * @desc    Update Product Image
 * @route   /api/products/upload-image/:id
 * @method  PUT
 * @access  private (only owner of the product)
 ------------------------------------------------*/
module.exports.updateProductImage = asyncHandler(async (req, res) => {
  // 1. Validation
  if (!req.file) {
    return res.status(400).json({ message: "no image provided" });
  }

  // 2. Get the product from DB and check if product exist
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  // 3. Check if this product belong to logged in user
  if (req.user.id !== product.user.toString()) {
    return res
      .status(403)
      .json({ message: "access denied, you are not allowed" });
  }

  // 4. Delete the old image
  await cloudinaryRemoveImage(product.image.publicId);

  // 5. Upload new photo
  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  const result = await cloudinaryUploadImage(imagePath);

  // 6. Update the image field in the db
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        image: {
          url: result.secure_url,
          publicId: result.public_id,
        },
      },
    },
    { new: true }
  );

  // 7. Send response to client
  res.status(200).json(updatedProduct);

  // 8. Remvoe image from the server
  fs.unlinkSync(imagePath);
});

/**-----------------------------------------------
 * @desc    Toggle Like
 * @route   /api/products/like/:id
 * @method  PUT
 * @access  private (only logged in user)
 ------------------------------------------------*/
module.exports.toggleLike = asyncHandler(async (req, res) => {
  const loggedInUser = req.user.id;
  const { id: productId } = req.params;

  let product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  const isProductAlreadyLiked = product.likes.find(
    (user) => user.toString() === loggedInUser
  );

  if (isProductAlreadyLiked) {
    product = await Product.findByIdAndUpdate(
      productId,
      {
        $pull: { likes: loggedInUser },
      },
      { new: true }
    );
  } else {
    product = await Product.findByIdAndUpdate(
      productId,
      {
        $push: { likes: loggedInUser },
      },
      { new: true }
    );
  }

  res.status(200).json(product);
});

/**-----------------------------------------------
 * @desc    Toggle cart
 * @route   /api/products/cart/:id
 * @method  PUT
 * @access  private (only logged in user)
 ------------------------------------------------*/
module.exports.toggleCart = asyncHandler(async (req, res) => {
  const loggedInUser = req.user.id;
  const { id: productId } = req.params;

  let product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  const isProductAlreadyAdded = product.cart.find(
    (user) => user.toString() === loggedInUser
  );

  if (isProductAlreadyAdded) {
    product = await Product.findByIdAndUpdate(
      productId,
      {
        $pull: { cart: loggedInUser },
      },
      { new: true }
    );
  } else {
    product = await Product.findByIdAndUpdate(
      productId,
      {
        $push: { cart: loggedInUser },
      },
      { new: true }
    );
  }

  res.status(200).json(product);
});
