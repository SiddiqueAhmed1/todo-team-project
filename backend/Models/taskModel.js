
const mongoose = require('mongoose');

const myTasksSchema = new mongoose.Schema({
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
  },
  status: {
    type: String,
  },
  assignee: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Assignee is required!'],
  },
  taskType: {
    type: String,
    enum: ["myTask", "vitalTask"],
    required: [true, 'Task type is required!']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String, // URL of task image (optional)
  }
}, {
  timestamps: true
});

const Task = mongoose.model('myTasks', myTasksSchema);

module.exports = Task;
