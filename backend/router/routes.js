const express = require('express')
const router = express.Router()
const { homepage, addTitle, getTodos, addTask } = require('../controller/todoController')

router.get('/', homepage)
router.post('/title', addTitle)
router.get('/todos', getTodos)
router.post('/task', addTask)

module.exports = router