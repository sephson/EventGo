const express = require("express");
const router = express.Router();
const UserController = require("../Controller/UserController");

const { signup } = UserController;

router.route("/signup").post(signup);

module.exports = router;
