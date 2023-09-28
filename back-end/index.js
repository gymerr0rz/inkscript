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
<<<<<<< HEAD
  'http://localhost:8080',
=======
  'https://dynamic-scone-61b6b0.netlify.app',
>>>>>>> 2f56c337cb9bc6b8b40614bc16f578af03aac476
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
