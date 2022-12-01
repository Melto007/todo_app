const express = require('express')
const router = express.Router()
const { homepage, createTodo, getTodo, deleteTodo, updateTodo, createTask, deleteTask, updateTask } = require('../controller/todoController')
const { registerUser } = require('../controller/userController')

/** todo routers */
router.get('/', homepage)
router.post('/title', createTodo)
router.get('/todos', getTodo)
router.put('/edit/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)
/** End of todo routers */

/** task routers */
router.put('/task/:id', createTask)
router.delete('/deletetask/:id', deleteTask)
router.put('/edittask/:id', updateTask)
/** End of task routers */

/** User Router */
router.post('/register', registerUser)
/** End of User Router */

module.exports = router