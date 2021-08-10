const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../Controller/PrivateController");
const { protect } = require("../Middleware/authMiddleware");

router.route("/dashboard").get(protect, getPrivateData);

module.exports = router;
