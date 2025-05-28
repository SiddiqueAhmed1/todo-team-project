const express = require('express');
const { createTodo, getAllTodos, updateTodo, deleteTodo, filterTodo } = require('../Controllers/TodoControllers');
const { protect } = require('@/Middleware/AuthMiddleware');


const router = express.Router();

// RESTful principles: The route structure mostly follows RESTful conventions (POST, GET, PUT, DELETE).
// This structure is clean, RESTful, and aligns with best practices for versioning (v1) and route grouping (/todos).

router.post('/create', protect, createTodo);       // POST /api/v1/todos/create
router.get('/', protect, getAllTodos);       // GET  /api/v1/todos
router.put('/update/:id', protect, updateTodo);     // PUT  /api/v1/todos/update/:id
router.delete('/delete/:id', protect, deleteTodo);  // DELETE /api/v1/todos/delete/:id
router.get('/filter', protect, filterTodo);  // GET  /api/v1/todos/filter

module.exports = router;