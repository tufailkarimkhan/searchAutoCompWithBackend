const express = require("express");
const route = express.Router();
const {
  viewData,
} = require("../controller/controller"); /* here i stored viewData which Exports from controllter*/
/* here i am defining route */
route.get("/search", viewData);
module.exports = route;
