const express = require("express");
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");
const UserController = require("../Controller/UserController");

const { signup, signin, userDashboard } = UserController;

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/dashboard/:id").get(protect, userDashboard);

module.exports = router;
