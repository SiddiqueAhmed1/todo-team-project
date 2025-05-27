const { createCurd, getAllCurds, updateCurd, deleteCurd, filterCurd } = require('../Controllers/curdControllers');
const express = require('express');
const router = express.Router();
const { protect } = require('@/Middleware/AuthMiddleware');

router.post('/create', protect, createCurd);
router.get('/getAll', protect, getAllCurds);
router.put('/update/:id', protect, updateCurd);
router.delete('/delete/:id', protect, deleteCurd);
router.get('/filter', protect, filterCurd);

module.exports = router;