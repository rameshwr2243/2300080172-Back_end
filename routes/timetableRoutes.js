// routes/timetableRoutes.js
const express = require('express');
const {
  getAllTimetables,
  getTimetableById,
  createTimetable,
  updateTimetable,
  deleteTimetable,
} = require('../controllers/timetableController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getAllTimetables);
router.get('/:id', auth, getTimetableById);
router.post('/', auth, createTimetable);
router.put('/:id', auth, updateTimetable);
router.delete('/:id', auth, deleteTimetable);

module.exports = router;
