const Contract = require("../models/contract.model");
const handlerFactory = require("./handlerFactory");

const createContract = handlerFactory.createOne(Contract);
const getAllContract = handlerFactory.getAll(Contract);
const getContract = handlerFactory.getOne(Contract, {
  path: "listProducts.product",
});
const updateContract = handlerFactory.updateOne(Contract);
const deleteContract = handlerFactory.deleteOne(Contract);

module.exports = {
  createContract,
  getAllContract,
  getContract,
  updateContract,
  deleteContract,
};
