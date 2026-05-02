const express = require('express');
const router = express.Router();

const { createLab, getLabs, submitLab } = require('../controllers/labController');
const { authMiddleware, teacherOnly } = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, teacherOnly, createLab);

router.get('/all', authMiddleware, getLabs);

router.post('/submit', authMiddleware, submitLab);

module.exports = router;


