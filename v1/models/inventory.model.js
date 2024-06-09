const mongoose = require("mongoose");
const mongooseSequence = require("mongoose-sequence");

const inventorySchema = new mongoose.Schema(
  {
    contract: {
      type: mongoose.Types.ObjectId,
      ref: "Contract",
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    // uniqueNumber: {
    //   type: Number,
    //   unique: true,
    // },
  },
  { timestamps: true }
);

inventorySchema.plugin(mongooseSequence(mongoose), {
  inc_field: "uniqueNumber",
});

module.exports = mongoose.model("Inventory", inventorySchema);
