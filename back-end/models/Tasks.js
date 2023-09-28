const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { randomUUID } = require('crypto');

const taskSchema = new Schema({
  // Unique title of the task
  title: {
    type: String,
  },

  // Date when the task is due (optional)
  date: String,

  // Origin of the task (optional)
  origin: {
    type: String,
    default: 'new_tasks',
  },

  // User
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  // Origin Color (optinal)
  color: { type: String, default: '#FFFFFF' },
});

module.exports = { taskSchema };
