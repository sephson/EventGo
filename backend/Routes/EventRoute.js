const express = require("express");
const router = express.Router();
const EventController = require("../Controller/EventController");
const { protect } = require("../Middleware/authMiddleware");
const {
  createEvent,
  allEvents,
  eventDetails,
  eventsCreated,
  deleteEvent,
  freeRegisterEvent,
  registeredFree,
  freeRegisterEventArray,
  eventsRegisteredForFree,
  getPeopleThatRegForMyEvent,
} = EventController;

router.route("/publish").post(protect, createEvent);
router.route("/all-events").get(allEvents);
router.route("/event-details/:eventId").get(eventDetails);
router.route("/events-created/:userId").get(eventsCreated);
router.route("/delete/:eventId").delete(deleteEvent);
router.route("/free-register-event/:eventId").post(freeRegisterEvent);
router.route("/free-register-event-array/:eventId").put(freeRegisterEventArray); //I am adding this so that a particular user doesnt register twice
router.route("/registered-users-free/:freeRegId").get(registeredFree);
router.route("/events-i-registered-for/:userId").get(eventsRegisteredForFree);
router
  .route("/people-who-registered-for-my-event/:eventId")
  .get(protect, getPeopleThatRegForMyEvent);

module.exports = router;
