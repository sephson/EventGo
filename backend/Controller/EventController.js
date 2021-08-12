const Event = require("../Models/EventModel");
const { find } = require("../Models/UserModel");
const User = require("../Models/UserModel");

exports.createEvent = async (req, res, next) => {
  const {
    userId,
    title,
    organiser,
    location,
    online,
    startDate,
    startTime,
    endDate,
    endTime,
    image,
    description,
    price,
  } = req.body;

  try {
    const event = await Event.create({
      userId,
      title,
      organiser,
      location,
      online,
      startDate,
      startTime,
      endDate,
      endTime,
      image,
      description,
      price,
    });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.allEvents = async (req, res, next) => {
  try {
    const allEvents = await Event.find({});
    res.status(200).json(allEvents);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.eventDetails = async (req, res) => {
  try {
    const eventdet = await Event.findById(req.params.eventId);
    if (eventdet) {
      res.status(200).json(eventdet);
    } else {
      res.status(404).json("Event doesnt exist");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.eventsCreated = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user) {
      const event = await Event.find({ userId: user._id });

      res.status(200).json(event);
    } else {
      res.status(404);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
