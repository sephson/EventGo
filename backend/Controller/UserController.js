const User = require("../Models/UserModel");

exports.register = async () => {
  const { username, email, password } = req.body;

  try {
      const user = User.create({
          username,
          email,
          password
      })
  } catch (error) {}
};
