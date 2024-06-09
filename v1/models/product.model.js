const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Mahsulot nomi mavjud bo'lish shart!"],
  },
  model: {
    type: String,
    required: [true, "Mahsulot modeli mavjud bo'lish shart!"],
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: [true, "Mahsulot turkumga tegishli bo'lishi shart!"],
  },
});

module.exports = mongoose.model("Product", productSchema);
