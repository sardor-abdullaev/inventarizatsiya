const express = require("express");

const apiV1 = require("./v1/index");
const errorHandler = require("./utils/errorHandler");

const app = express();
app.use(express.json());

app.use("/api/v1", apiV1);
app.use(errorHandler);

module.exports = app;
