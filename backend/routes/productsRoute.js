const router = require("express").Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getProductCount,
  deleteProduct,
  updateProduct,
  updateProductImage,
  toggleLike,
} = require("../controllers/productsController");
const photoUpload = require("../middlewares/photoUpload");
const { verifyToken } = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

// /api/products
router.route("/")
  .post(verifyToken, photoUpload.single("image"), createProduct)
  .get(getAllProducts);

// /api/products/count
router.route("/count").get(getProductCount);

// /api/products/:id
router.route("/:id")
  .get(validateObjectId, getSingleProduct)
  .delete(validateObjectId, verifyToken, deleteProduct)
  .put(validateObjectId, verifyToken, updateProduct);

// /api/products/update-image/:id
router.route("/update-image/:id")
  .put(
    validateObjectId,
    verifyToken,
    photoUpload.single("image"),
    updateProductImage
  );

// /api/products/like/:id
router.route("/like/:id").put(validateObjectId, verifyToken, toggleLike);

module.exports = router;
