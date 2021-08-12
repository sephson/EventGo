const Event = require("../Models/EventModel");

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
