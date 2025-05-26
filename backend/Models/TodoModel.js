const mongoose = require("mongoose");
const { Schema } = mongoose; // Destructuring for cleaner code

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: [100, "Title cannot exceed 100 characters"], //max length for title
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['pending', 'in-progress', 'completed'], //Using an enum ensures only valid values are allowed
            default: 'pending',
        },
        priority: {
            type: String,
            required: true,
            enum: ['low', 'normal', 'high'], //Using an enum ensures only valid values are allowed
            default: 'normal',
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
            index: true, //for Performance
        },
    },
    {
        timestamps: true,
    })

const TodoModel = mongoose.model("Todo", todoSchema);
module.exports = TodoModel;