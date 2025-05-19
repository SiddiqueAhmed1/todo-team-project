const mongoose = require('mongoose');

const taskCategorySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['status', 'priority'],
    required: [true, 'Type is required!']
  },
  value: {
    type: String,
    required: [true, 'Value is required!']
  }
});

const taskCategory = mongoose.model('TaskCategory', taskCategorySchema);
module.exports = taskCategory;

