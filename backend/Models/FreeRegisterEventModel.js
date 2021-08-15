const mongoose = require("mongoose");
//this also involves paid events...dont wanna add new model for paid
const FreeEventRegSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
    },
    userId: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    email: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const FreeEventReg = mongoose.model("FreeEvent", FreeEventRegSchema);

module.exports = FreeEventReg;
