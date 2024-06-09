const mongoose = require("mongoose");
const validator = require("validator");

const contractSchema = new mongoose.Schema(
  {
    contractNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    listProducts: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: String,
          // required: true,
          default: 1,
          validate: {
            message: "quantity kamida 1 ga teng butun son bo'lish kerak!",
            validator: function (val) {
              return validator.isInt(val, { min: 1 });
            },
          },
        },
        price: {
          type: String,
          required: true,
          validate: {
            message: "price 0 dan katta bo'lish kerak",
            validator: function (val) {
              return validator.isFloat(val, { gt: 0 });
            },
          },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contract", contractSchema);
