const express = require("express");
const router = express.Router();
const EventController = require("../Controller/EventController");
const { protect } = require("../Middleware/authMiddleware");
const { createEvent } = EventController;

router.route("/publish").post(protect, createEvent);

module.exports = router;
