const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/dataBase");
const router = require("./router/router");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", router);

app.listen(port, () => {
  console.log("Server Listen at " + port);
  mongoDB();
});
