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

exports.deleteTitle = async (req, res) => {
    try {
        const { id } = req.params

        const titleExists = await Todo.findByIdAndDelete(id)
        if(!titleExists) {
            throw new Error('Todo is not exists')
        }

        res.status(200).json({
            success: true,
            message: 'Todo deleted successfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.editTitle = async (req, res) => {
    try {
        const { id } = req.params
        const { title } = req.body

        const titleExists = await Todo.findOneAndUpdate(id, { title })
        if(!titleExists) {
            throw new Error('Todo is not exists')
        }

        res.status(200).json({
            success: true,
            message: 'Todo updated successfully'
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
        const { id } = req.params

        const todo = await Todo.findById(id)

        if(!todo) {
            throw new Error("Todo not exists")
        }
    
        todo.tasks.push(task)
        await todo.save()

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

exports.editTask = async (req, res) => {
    try {
        const { id } = req.params
        const ids = req.headers.id
        const { task } = req.body

        const todo = await Todo.findById(id)

        if(!todo) {
            throw new Error("Todo not exists")
        }

        todo.tasks.splice(ids, 1, task)
        todo.save()

        res.status(200).json({
            success: true,
            message: "Updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const { task } = req.headers
        const todo = await Todo.findById(id)
        
        if(!todo) {
            throw new Error("Task not exists")
        }

        todo.tasks.splice(task, 1)
        todo.save()

        res.status(200).json({
            success: true,
            message: "Updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}