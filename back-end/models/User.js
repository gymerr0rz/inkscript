const mongoose = require('mongoose');
const { noteSchema } = require('./Notes');
const { taskSchema } = require('./Tasks');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
  social: {
    enum: ['twitter', 'github', 'linkedin'],
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    default: 'uploads/default.png',
  },
  profile_banner: {
    type: String,
    default: 'https://cdn.onlinewebfonts.com/svg/img_110805.png',
  },
  token: {
    type: String,
  },
  email_confirmed: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  bio: {
    type: String,
    default: 'No bio',
  },
  social_media: [socialSchema],
  notes: [noteSchema],
  tasks: [taskSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
