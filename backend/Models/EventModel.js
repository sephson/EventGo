const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      //   required: true,
    },
    title: {
      type: String,
      //   required: true,
    },
    location: {
      type: String,
      //   require: true,
    },
    organiser: {
      type: String,
    },
    online: {
      type: String,
    },
    startDate: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endDate: {
      type: String,
    },
    endTime: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    freeRegistered: {
      type: Array,
      default: [],
    },
    paidRegistered: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
