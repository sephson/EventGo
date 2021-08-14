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
  },
  { timestamps: true }
);

const FreeEventReg = mongoose.model("FreeEvent", FreeEventRegSchema);

module.exports = FreeEventReg;
