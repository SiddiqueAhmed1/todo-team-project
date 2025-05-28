const express = require('express');
const { createTodo, getAllTodos, updateTodo, deleteTodo } = require('../Controllers/TodoControllers');
const { protect } = require('@/Middleware/AuthMiddleware');


const router = express.Router();

// RESTful principles: The route structure mostly follows RESTful conventions (POST, GET, PUT, DELETE).
// This structure is clean, RESTful, and aligns with best practices for versioning (v1) and route grouping (/todos).

router.post('/', protect, createTodo);       // POST /api/v1/todos
router.get('/', protect, getAllTodos);       // GET  /api/v1/todos
router.put('/:id', protect, updateTodo);     // PUT  /api/v1/todos/:id
router.delete('/:id', protect, deleteTodo);  // DELETE /api/v1/todos/:id

module.exports = router;