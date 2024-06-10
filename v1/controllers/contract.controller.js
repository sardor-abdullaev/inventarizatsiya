const catchAsync = require("../../utils/catchAsync");
const Contract = require("../models/contract.model");
const handlerFactory = require("./handlerFactory");

const createContract = handlerFactory.createOne(Contract);
const getAllContract = handlerFactory.getAll(Contract);
const getContract = handlerFactory.getOne(Contract, {
  path: "listProducts.product",
});
const updateContract = handlerFactory.updateOne(Contract);
const deleteContract = handlerFactory.deleteOne(Contract);

const checkContract = catchAsync(async (req, res, next) => {
  if (req.body.contract) {
    const contract = await Contract.findById(req.body.contract);
    if (!contract) {
      return next(
        new AppError(`Couldn't find contract with ${req.body.product} id.`, 404)
      );
    }
  }
  next();
});

module.exports = {
  createContract,
  getAllContract,
  getContract,
  updateContract,
  deleteContract,
  checkContract,
};
