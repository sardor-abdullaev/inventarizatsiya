const express = require("express");
const router = express.Router();

const categoryRouter = require("./routes/category.router");
const productRouter = require("./routes/product.router");

router.use("/categories", categoryRouter);
router.use("/products", productRouter);

module.exports = router;
