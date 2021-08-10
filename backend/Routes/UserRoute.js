const express = require("express");
const router = express.Router();
const UserController = require("../Controller/UserController");

const { signup, signin } = UserController;

router.route("/signup").post(signup);
router.route("/signin").post(signin);

module.exports = router;
