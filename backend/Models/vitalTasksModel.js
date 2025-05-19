
const mongoose = require('mongoose');

const vitalTaskSchema = new mongoose.Schema({
 title: {
    type: String,
    required: [true, 'Title is required!']
  },
  description: {
    type: String,
    required: [true, 'Description is required!']
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
    type: mongoose.Types.ObjectId,
    required: [true, 'Assignee is required!'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  }
  thumbnail: {
    type: String, // URL of task image (optional)
  }
}, {
  timestamps: true
});

const Task = mongoose.model('vitalTasks', vitalTaskSchema);

module.exports = Task;
