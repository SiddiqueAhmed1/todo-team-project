const express = require('express');
const { createTodo, getAllTodos, updateTodo, deleteTodo } = require('../Controllers/TodoControllers');
const { protect } = require('@/Middleware/AuthMiddleware');


const router = express.Router();

router.post('/create', protect, createTodo);
router.get('/getAll', protect, getAllTodos);
router.put('/update/:id', protect, updateTodo);
router.delete('/delete/:id', protect, deleteTodo);

module.exports = router;