const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Turkum nomi mavjud bo'lish shart!"],
    unique: true,
  },
});

module.exports = mongoose.model("Item", categorySchema);
