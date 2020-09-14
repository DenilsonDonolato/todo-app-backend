const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
module.exports = mongoose.connect("mongodb://localhost/todo", options);
