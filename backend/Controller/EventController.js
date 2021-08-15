const Event = require("../Models/EventModel");
const FreeEventReg = require("../Models/FreeRegisterEventModel");
const User = require("../Models/UserModel");
// const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);

//note-free registered also involves paid registereation. a post and put request will occur when users have paid

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

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (event) {
      await event.remove();
      res.json({ message: "Product removed" });
    } else res.status(404).json("event not found");
  } catch (error) {
    res.status(500);
  }
};

exports.freeRegisterEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    console.log(req.params.eventId);

    if (event) {
      const { userId, username, email, title } = req.body;
      const { eventId } = req.params;

      const freeEvent = await FreeEventReg.create({
        userId,
        eventId,
        username,
        title,
        email,
      });

      res.status(200).json(freeEvent);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.freeRegisterEventArray = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    // const user = await User.findById(req.body.userId);
    if (!event.freeRegistered.includes(req.body.userId)) {
      await event.updateOne({ $push: { freeRegistered: req.body.userId } });
      res.status(200).json(req.body.userId);
    } else {
      res.status(403).json("you already registered for this event");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.registeredFree = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (event) {
      const freeRegisteredUsers = await FreeEventReg.find({
        eventId: req.params.eventId,
      });
      res.status(200).json(freeRegisteredUsers);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.eventsRegisteredForFree = async (req, res) => {
  try {
    // const user = await Event.findById(req.params.userId);

    const eventsIregisteredfor = await FreeEventReg.find({
      userId: req.params.userId,
    });
    res.status(200).json(eventsIregisteredfor);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getPeopleThatRegForMyEvent = async (req, res) => {
  try {
    const peopleReg = await FreeEventReg.find({
      eventId: req.params.eventId,
    });
    res.status(200).json(peopleReg);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// exports.paymentEvent = async (req, res) => {
//   try {
//     const { userId, username, email, title } = req.body;
//     const { eventId } = req.params;

//     paystack.customer
//   } catch (error) {}
// };
