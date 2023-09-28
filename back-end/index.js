const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const authRoutes = require('./routes/Auth');
const userRoutes = require('./routes/User');
const uploadRoute = require('./routes/Uploads');
const cors = require('cors');
require('dotenv').config();

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_SRV)
  .then(() => console.log('Connected to database'));

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:8080',
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());
app.use('/auth/', authRoutes);
app.use('/user/', userRoutes);
app.use('/uploads/', uploadRoute);

app.listen(PORT, () => {
  console.log('Listening on PORT:' + PORT);
});
