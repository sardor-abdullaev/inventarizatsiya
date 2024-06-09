const express = require("express");
const router = express.Router();

const contractController = require("../controllers/contract.controller");

router
  .route("/")
  .post(contractController.createContract)
  .get(contractController.getAllContract);

router
  .route("/:id")
  .get(contractController.getContract)
  .patch(contractController.updateContract)
  .delete(contractController.deleteContract);

module.exports = router;
