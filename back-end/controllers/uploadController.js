const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;
const path = require('path');

const get_file = async (req, res) => {
  try {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, '../uploads', filename));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  get_file,
};
