const mongoose = require("mongoose");
const mongoDBuri =
  "mongodb+srv://tufailkarim07:tufailkarim07@testtufail.c7mdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongod = async () => {
  mongoose
    .connect(mongoDBuri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB Connected... ");
    });
};

module.exports = mongod;
