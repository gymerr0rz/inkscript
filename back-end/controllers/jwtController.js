require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_TOKEN = process.env.REFRESH_TOKEN_SECRET;

const handleJWTToken = async (req, res) => {
  const headers = req.headers.authorization;

  if (!headers) return res.sendStatus(403);

  const user = jwt.decode(headers, SECRET_TOKEN);

  res.json({
    status: 'success',
    username: user.username,
  });
};

module.exports = handleJWTToken;
