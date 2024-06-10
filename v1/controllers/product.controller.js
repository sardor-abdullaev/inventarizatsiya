const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
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
const getProduct = handlerFactory.getOne(Product, {
  path: "category",
  select: "name",
});
const updateProduct = handlerFactory.updateOne(Product);
const deleteProduct = handlerFactory.deleteOne(Product);

const checkListProducts = catchAsync(async (req, res, next) => {
  req.body.listProducts &&
    req.body.listProducts.forEach(async (productEl) => {
      const product = await Product.findById(productEl.product);
      if (!product) {
        return next(
          new AppError(
            `Couldn't find product with ${productEl.product} id`,
            404
          )
        );
      }
    });
  next();
});

const checkProduct = catchAsync(async (req, res, next) => {
  if (req.body.product) {
    const product = await Product.findById(req.body.product);
    if (!product) {
      return next(
        new AppError(`Couldn't find product with ${req.body.product} id.`, 404)
      );
    }
  }
  next();
});

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  checkListProducts,
  checkProduct,
};
