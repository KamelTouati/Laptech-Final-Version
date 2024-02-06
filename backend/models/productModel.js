const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    company: {
      type: String,
      required: [true, "Please add a company name"],
      trim: true,
    },
    model: {
      type: String,
      required: [true, "Please add a model name"],
      trim: true,
    },
    operatingSystem: {
      type: String,
      required: [true, "Please add the operating system"],
      trim: true,
    },
    processorCompany: {
      type: String,
      required: [true, "Please add the precessor company name"],
      trim: true,
    },
    processorModel: {
      type: String,
      required: [true, "Please add the precessor model name"],
      trim: true,
    },
    graphicCard: {
      type: String,
      required: [true, "Please add the graphic card name"],
      trim: true,
    },
    memory: {
      type: String,
      required: [true, "Please add the memory size"],
      trim: true,
    },
    display: {
      type: String,
      required: [true, "Please add the display size"],
      trim: true,
    },
    storage: {
      type: String,
      required: [true, "Please add the storage size"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please add the price"],
      trim: true,
    },
    image: {
      type: Object,
      default: {
        url: "",
        publicId: null,
      },
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    ratings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Populate Comment For This Product
productSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "ProductId",
  localField: "_id",
});

// Product Model
const Product = mongoose.model("Product", productSchema);

// Validate Create Product
function validateCreateProduct(obj) {
  const schema = Joi.object({
    company: Joi.string().trim().required(),
    model: Joi.string().trim().required(),
    operatingSystem: Joi.string().trim().required(),
    processorCompany: Joi.string().trim().required(),
    processorModel: Joi.string().trim().required(),
    graphicCard: Joi.string().trim().required(),
    memory: Joi.string().trim().required(),
    display: Joi.string().trim().required(),
    memory: Joi.string().trim().required(),
    storage: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    price: Joi.number().required(),
  });
  return schema.validate(obj);
}

// Validate Update Product
function validateUpdateProduct(obj) {
  const schema = Joi.object({
    company: Joi.string().trim().required(),
    model: Joi.string().trim().required(),
    operatingSystem: Joi.string().trim().required(),
    processorCompany: Joi.string().trim().required(),
    processorModel: Joi.string().trim().required(),
    graphicCard: Joi.string().trim().required(),
    memory: Joi.string().trim().required(),
    display: Joi.string().trim().required(),
    memory: Joi.string().trim().required(),
    storage: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    price: Joi.Number().trim().required(),
  });
  return schema.validate(obj);
}

module.exports = {
  Product,
  validateCreateProduct,
  validateUpdateProduct,
};
