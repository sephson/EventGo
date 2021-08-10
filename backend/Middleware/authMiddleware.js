const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");
const ErrorResponse = require("../Utils/errorResponse");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorisation &&
    req.headers.authorisation.startsWith("Bearer")
  ) {
    token = req.headers.authorisation.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //jwt has an id, check userModel
    const user = await User.findById(decoded.id);

    if (!user) return next(new ErrorResponse("user doesnt exist", 404));

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this router", 401));
  }
};
