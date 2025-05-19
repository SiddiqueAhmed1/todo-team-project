const mongoose = require('mongoose');

const taskCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required!']
  },
  type: {
    type: String,
    enum: ['status', 'priority'],
  },
  value: {
    type: String,
  }
});

const taskCategory = mongoose.model('TaskCategory', taskCategorySchema);
module.exports = taskCategory;

