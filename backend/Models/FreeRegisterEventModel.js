const mongoose = require("mongoose");

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
  },
  { timestamps: true }
);

const FreeEventReg = mongoose.model("FreeEvent", FreeEventRegSchema);

module.exports = FreeEventReg;
