const User = require("../Models/UserModel");

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
    if (!user) res.status(404).json("password or email doesnt match");

    const matchPass = await user.matchPasswords(password);
    if (!matchPass) return res.status(404).json("incorrect");
    else {
      getToken(user, 200, res);
    }
  } catch (error) {
    res.staus(500);
  }
};

const getToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
