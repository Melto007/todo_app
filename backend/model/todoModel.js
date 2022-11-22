const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'title is required'],
        trim: true,
        maxLength: [20, 'name must be 20 character long'],
        default: Date.now
    },
    tasks: {
        type: [String],
        default: Date.now
    }
})

module.exports = mongoose.model('todo', todoSchema)