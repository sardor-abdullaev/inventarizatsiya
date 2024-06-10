const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventory.controller");
const { checkProduct } = require("../controllers/product.controller");
const { checkContract } = require("../controllers/contract.controller");

router
  .route("/")
  .get(inventoryController.getAllInventory)
  .post(checkProduct, checkContract, inventoryController.createInventory);

router
  .route("/:id")
  .get(inventoryController.getInventory)
  .patch(checkProduct, checkContract, inventoryController.updateInventory)
  .delete(inventoryController.deleteInventory);

module.exports = router;
