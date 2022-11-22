const express = require('express')
const router = express.Router()
const { homepage } = require('../controller/todoController')

router.get('/', homepage)

module.exports = router