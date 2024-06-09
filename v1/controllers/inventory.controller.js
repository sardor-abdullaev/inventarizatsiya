const Inventory = require("../models/inventory.model");
const handlerFactory = require("./handlerFactory");

const createInventory = handlerFactory.createOne(Inventory);
const getInventory = handlerFactory.getOne(Inventory);
const getAllInventory = handlerFactory.getAll(Inventory);
const updateInventory = handlerFactory.updateOne(Inventory);
const deleteInventory = handlerFactory.deleteOne(Inventory);

module.exports = {
  createInventory,
  getAllInventory,
  getInventory,
  updateInventory,
  deleteInventory,
};
