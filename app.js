const express = require("express");

const categoryRouter = require("./v1/routes/category.router");

const app = express();
app.use(express.json());

app.use("/api/v1/categories", categoryRouter);

module.exports = app;
