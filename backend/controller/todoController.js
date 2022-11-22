const Todo = require('../model/todoModel')

exports.homepage = (req, res) => {
    res.send('<h1>TODO APP...!</h1>')
}

exports.addTitle = async (req, res) => {
    try {
        const { title } = req.body

        if(!title) {
            throw new Error('Title Field is required')
        }

        await Todo.create({
            title
        })

        res.status(200).json({
            success: true,
            message: "Title stored successfully"
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.getTodos = async (req, res) => {
    try {
        const todo = await Todo.find()

        if(todo.length === 0) {
            throw new Error('Todo is empty')
        }

        res.status(200).json({
            success: true,
            todo
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.addTask = async (req, res) => {
    try {
        const { task } = req.body
        const { id } = req.headers

        const tasks = await Todo.findByIdAndUpdate(id, { task })

        if(!tasks) {
            throw new Error("Todo not exists")
        }

        res.status(200).json({
            success: true,
            message: "task added successfully"
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}