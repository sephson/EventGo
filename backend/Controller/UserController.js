const User = require("../Models/UserModel");

exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    getToken(user, 200, res);
  } catch (error) {
    next();
  }
};

const getToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
