const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;
const axios = require('axios');
const key = process.env.WEATHER_KEY;

const get_weather = async (req, res) => {
  try {
    const { location } = req.body;

    const headers = req.headers.authorization;

    if (!headers) return res.sendStatus(403);

    const token = headers.split(' ')[1];

    const decode = jwt.decode(token, SECRET_TOKEN);

    const user_username = decode.username;

    const user = await User.findById(user_username);

    if (!user) return res.sendStatus(204);

    const weather = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`
    );

    res.send(weather.data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  get_weather,
};
