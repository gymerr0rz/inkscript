const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handle_user = async (req, res) => {
  try {
    const { email, password } = req.body.accountData;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({
        status: 'failed',
        message: "Email doesn't exist!",
      });
    const match = await bcrypt.compare(password, user.password);

    if (!match)
      res.status(401).json({
        status: 'failed',
        message: 'Incorrect password!',
      });

    if (match) {
      const accessToken = jwt.sign(
        {
          username: user._id,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.status(200).json({
        success: `User ${user.username} is logged in`,
        jwt_token: accessToken,
        user: user,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { handle_user };
