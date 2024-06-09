const Category = require("../models/category.model");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

const createCategory = catchAsync(async (req, res, next) => {
  const newCategory = await Category.create({ name: req.body.name });

  res.status(201).json({
    status: "success",
    data: {
      category: newCategory,
    },
  });
});

const getAllCategory = catchAsync(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    status: "success",
    results: categories.length,
    data: {
      categories,
    },
  });
});

const deleteCategory = catchAsync(async (req, res, next) => {
  const deletedCategory = await Category.findByIdAndDelete(req.params.id);

  if (!deletedCategory) {
    return next(new AppError("No category found with that id", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

const updateCategory = catchAsync(async (req, res, next) => {
  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedCategory) {
    return next(new AppError("No Category found with that id", 404));
  }

  res.status(200).json({
    status: "success",
    data: { category: updatedCategory },
  });
});

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
