const express = require("express");
const router = express.Router();
const EventController = require("../Controller/EventController");
const { protect } = require("../Middleware/authMiddleware");
const { createEvent, allEvents } = EventController;

router.route("/publish").post(protect, createEvent);
router.route("/all-events").get(allEvents);

module.exports = router;
