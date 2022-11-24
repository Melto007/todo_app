const express = require('express')
const router = express.Router()
const { homepage, addTitle, getTodos, addTask, editTitle, deleteTitle, deleteTask, editTask } = require('../controller/todoController')

router.get('/', homepage)
router.post('/title', addTitle)
router.get('/todos', getTodos)
router.put('/task/:id', addTask)
router.put('/edit/:id', editTitle)
router.delete('/delete/:id', deleteTitle)
router.delete('/deletetask/:id', deleteTask)
router.put('/edittask/:id', editTask)

module.exports = router