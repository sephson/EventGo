const express = require("express");
const router = express.Router();
const EventController = require("../Controller/EventController");
const { protect } = require("../Middleware/authMiddleware");
const { createEvent, allEvents, eventDetails, eventsCreated } = EventController;

router.route("/publish").post(protect, createEvent);
router.route("/all-events").get(allEvents);
router.route("/event-details/:eventId").get(eventDetails);
router.route("/events-created/:userId").get(eventsCreated);

module.exports = router;
