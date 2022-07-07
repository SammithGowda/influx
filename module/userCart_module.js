const mongoose = require("mongoose");
const userCartSchema = new mongoose.Schema(
  {
    code: { type: Number, required: true },
    qty: { type: Number, required: true },
    unitprice: { type: Number },
    totalAmount: { type: Number },
    orderId: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("userCart", userCartSchema);
