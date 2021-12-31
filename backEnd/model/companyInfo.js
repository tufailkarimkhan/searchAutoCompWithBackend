/* Here i am making schema */
const mongoose = require("mongoose");
const { search } = require("../router/router");
const schema = mongoose.Schema;

const searchInfo = new schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    require: true,
  },
});

searchInfo.index("name");
module.exports = mongoose.model("Company_Info", searchInfo);
