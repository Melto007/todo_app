const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'title is required'],
            maxLength: [20, 'name must be 20 character long'],
        },
        tasks: [String],
        reminder: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('todo', todoSchema)