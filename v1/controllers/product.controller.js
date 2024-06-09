const Product = require("../models/product.model");
const handlerFactory = require("./handlerFactory");

// const createProduct = catchAsync(async (req, res, next) => {
//   const newProduct = await Product.create({
//     name: req.body.name,
//     model: req.body.model,
//     category: req.body.category,
//   });

//   res.status(201).json({
//     status: "success",
//     data: {
//       product: newProduct,
//     },
//   });
// });

// const getAllProduct = catchAsync(async (req, res, next) => {
//   const products = await Product.find();

//   res.status(200).json({
//     status: "success",
//     results: products.length,
//     data: {
//       products,
//     },
//   });
// });

// const deleteProduct = catchAsync(async (req, res, next) => {
//   const deletedProduct = await Product.findByIdAndDelete(req.params.id);

//   if (!deletedProduct) {
//     return next(new AppError("No product found with that id", 404));
//   }

//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// });

// const updateProduct = catchAsync(async (req, res, next) => {
//   const updatedProduct = await Product.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   if (!updatedProduct) {
//     return next(new AppError("No Product found with that id", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: { product: updatedProduct },
//   });
// });

const createProduct = handlerFactory.createOne(Product);
const getAllProduct = handlerFactory.getAll(Product);
const getProduct = handlerFactory.getOne(Product);
const updateProduct = handlerFactory.updateOne(Product);
const deleteProduct = handlerFactory.deleteOne(Product);

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
