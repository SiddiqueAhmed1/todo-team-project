
const mongoose = require('mongoose');

const myTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  objective: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Moderate', 'High', 'Extreme'],
    default: 'Low',
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
  assignee: {
    type: String, // You can replace with ObjectId if users are in DB
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: String, // or Date if you want full time support
    default: 'End of Day',
  },
  thumbnail: {
    type: String, // URL of task image (optional)
  }
}, {
  timestamps: true
});

const Task = mongoose.model('Task', myTaskSchema);

module.exports = Task;
