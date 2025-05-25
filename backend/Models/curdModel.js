const mongoose = require("mongoose");

const curdSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: 'pending',
        },
        priority: {
            type: String,
            required: true,
            default: 'normal',
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    })

const curdModel = mongoose.model('Curd', curdSchema);
module.exports = curdModel;