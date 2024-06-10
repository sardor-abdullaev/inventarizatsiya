const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventory.controller");
const { checkProduct } = require("../controllers/product.controller");

router
  .route("/")
  .get(inventoryController.getAllInventory)
  .post(checkProduct, inventoryController.createInventory);

router
  .route("/:id")
  .get(inventoryController.getInventory)
  .patch(inventoryController.updateInventory)
  .delete(inventoryController.deleteInventory);

module.exports = router;
