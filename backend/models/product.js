const mongoose = require("mongoose");

const parametersSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minlength: 2,
  },
  brand: {
    type: String,
    required: true,
    minlength: 2,
  },
});

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
  },
  params: parametersSchema,
});

module.exports = mongoose.model("product", productSchema);
