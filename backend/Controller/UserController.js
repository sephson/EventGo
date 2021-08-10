const User = require("../Models/UserModel");
const errorResponse = require("../Utils/errorResponse");

exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    getToken(user, 201, res);
  } catch (error) {
    next();
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password"); //include password
    if (!user) {
      return next(new errorResponse("invalid credential", 404));
    }

    const matchPass = await user.matchPasswords(password);
    if (!matchPass) return next(new errorResponse("invalid credential", 403));
    else {
      getToken(user, 200, res);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token, user });
};
