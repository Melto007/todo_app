const express = require('express')
const router = express.Router()
const { homepage, addTitle, getTodos, addTask, editTitle, deleteTitle } = require('../controller/todoController')

router.get('/', homepage)
router.post('/title', addTitle)
router.get('/todos', getTodos)
router.post('/task', addTask)

router.put('/edit', editTitle)
router.delete('/delete', deleteTitle)

module.exports = router