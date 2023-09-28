const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const get_user = async (req, res) => {
  try {
    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username);

    if (!user) return res.sendStatus(204);

    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const delete_user = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.sendStatus(403);

  const headers = req.headers.authorization;
  const token = headers.split(' ')[1];

  if (!token) return res.sendStatus(403);

  const decode = jwt.decode(token, SECRET_TOKEN);

  const user_username = decode.username;

  const user = await User.findById(user_username);

  const taskIndex = user.tasks.findIndex((task) => task.title === title);

  if (taskIndex !== -1) {
    user.tasks.splice(taskIndex, 1);
    await user.save();
    return res.sendStatus(200);
  }
};

const upload_profile_image = async (req, res) => {
  try {
    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    if (!token) return res.sendStatus(403);

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username);

    user.profile_image = req.file.path;

    await user.save();

    res.status(200).json({ message: 'Profile picture uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const change_settings = async (req, res) => {
  try {
    const { username, bio } = req.body;

    if (!username) return res.sendStatus(403);

    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    if (!token) return res.sendStatus(403);

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username); // Finds user by token authorization

    const changeUser = await User.findOne({ username: username.toLowerCase() }); // Finds user from the request to see if it exists.

    if (username) {
      if (changeUser?.username.toLowerCase() === username.toLowerCase()) {
        res.status(409).json({
          status: 'failed',
          message: 'User with that username already exists!',
        });
      } else {
        user.username = username;
        await user.save();
        res.status(200).json({
          status: 'success',
          message: 'Username is updated to ' + username,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  get_user,
  delete_user,
  change_settings,
  upload_profile_image,
};
