const mongoose = require("mongoose");
const itemMasterySchema = new mongoose.Schema(
  {
    code: { type: Number, required: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true, unique: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("itemMastery", itemMasterySchema);
