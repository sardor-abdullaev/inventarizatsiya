const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventory.controller");

router
  .route("/")
  .get(inventoryController.getAllInventory)
  .post(inventoryController.createInventory);

router
  .route("/:id")
  .get(inventoryController.getInventory)
  .patch(inventoryController.updateInventory)
  .delete(inventoryController.deleteInventory);

module.exports = router;
