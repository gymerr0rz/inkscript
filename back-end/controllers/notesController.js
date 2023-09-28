const Note = require('../models/Notes');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const get_notes = async (req, res) => {
  try {
    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username);

    if (!user) return res.sendStatus(204);

    res.send(user.notes);
  } catch (err) {
    console.log(err);
  }
};

const create_notes = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title && !content) return res.sendStatus(403);

    const headers = req.headers.authorization;
    const token = headers.split(' ')[1];

    if (!token) return res.sendStatus(403);

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username);

    const findNote = user.notes.find((note) => note.title === title);

    if (findNote) return res.sendStatus(409);

    const newNote = {
      title: title,
      description: content,
    };

    user.notes.push(newNote);

    await user.save();

    return res.sendStatus(200);
  } catch (err) {
    console.log(err + ' Notes');
  }
};

const delete_note = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.sendStatus(403);

  const headers = req.headers.authorization;
  const token = headers.split(' ')[1];

  if (!token) return res.sendStatus(403);

  const decode = jwt.decode(token, SECRET_TOKEN);

  const user_username = decode.username;

  const user = await User.findById(user_username);

  const noteIndex = user.notes.findIndex((note) => note.title === title);

  if (noteIndex !== -1) {
    user.notes.splice(noteIndex, 1);
    await user.save();
    return res.sendStatus(200);
  }
};

module.exports = { create_notes, get_notes, delete_note };
