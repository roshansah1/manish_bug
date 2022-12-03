const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  bookname: {
    type: String,
  },
  contact: {
    type: String,
    required: true,
    // min: 10,
    // max: 10
  },
  address: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Order", orderSchema);