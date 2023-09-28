const User = require('../models/User');
const bcrypt = require('bcrypt');
const sendConfirmationEmail = require('../utils/sendConfirmationEmail');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const confirm_user = async (req, res) => {
  try {
    const { token } = req.params;

    // Verify the token against the token stored in the database
    const user = await User.findOne({ token });

    if (!user) {
      res.status(404).send('Invalid confirmation link.');
      return;
    }

    // Update the user's account to confirm their email address
    await User.updateOne(
      { token },
      { $unset: { token }, $set: { email_confirmed: true } }
    );

    res.send('Email confirmed. Thank you!');
  } catch (err) {
    console.log(err);
  }
};

const retry_confirm_user = async (req, res) => {
  try {
    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username);

    if (!user) return res.sendStatus(204);

    if (!user.token) return res.sendStatus(204);

    const confirmationLink = `http://localhost:8080/auth/confirm/${user.token}`;
    await sendConfirmationEmail(user.email, confirmationLink);
  } catch (err) {
    console.log(err);
  }
};

const create_user = async (req, res) => {
  const { email, username, password } = req.body.accountData;

  if (!email && !username && !password)
    return res.status(400).json({
      status: 'failed',
      message: 'No content!',
    });

  const userFind = await User.findOne({ email });

  if (userFind)
    return res.status(409).json({
      status: 'failed',
      message: 'Account already exists!',
    });

  try {
    // Hash the Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = uuid.v4();
    // Create a User
    const user = new User({
      email,
      username,
      password: hashedPassword,
      token,
      notes: [],
      tasks: [],
    });

    const accessToken = jwt.sign(
      {
        username: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    const confirmationLink = `https://INKSCRIPT.onrender.com/auth/confirm/${token}`;
    await sendConfirmationEmail(email, confirmationLink);
    // Save the user to the database
    user.save();
    res.status(200).json({
      status: 'success',
      message: 'Account created!',
      user: user,
      token: accessToken,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  create_user,
  confirm_user,
  retry_confirm_user,
};
