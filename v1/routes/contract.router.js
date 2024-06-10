const express = require("express");
const router = express.Router();

const contractController = require("../controllers/contract.controller");
const { checkListProducts } = require("../controllers/product.controller");

router
  .route("/")
  .post(checkListProducts, contractController.createContract)
  .get(contractController.getAllContract);

router
  .route("/:id")
  .get(contractController.getContract)
  .patch(contractController.updateContract)
  .delete(contractController.deleteContract);

module.exports = router;
