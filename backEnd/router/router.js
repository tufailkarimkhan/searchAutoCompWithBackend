const express = require("express");
const route = express.Router();
const { viewData } = require("../controller/controller");

route.get("/search", viewData);
module.exports = route;
