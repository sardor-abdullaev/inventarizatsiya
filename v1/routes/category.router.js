const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category.controller");

router
  .route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory);

router
  .route("/:id")
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
