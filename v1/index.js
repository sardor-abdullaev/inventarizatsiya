const express = require("express");
const router = express.Router();

const categoryRouter = require("./routes/category.router");
const productRouter = require("./routes/product.router");
const contractRouter = require("./routes/contract.router");
const inventoryRouter = require("./routes/inventory.router");

router.use("/categories", categoryRouter);
router.use("/products", productRouter);
router.use("/contracts", contractRouter);
router.use("/inventories", inventoryRouter);

module.exports = router;
