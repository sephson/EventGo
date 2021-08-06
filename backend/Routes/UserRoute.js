const express = require("express");
const router = express.Router();
const userRoute = require("../Controller/UserController");

const { register, login } = userRoute;

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
