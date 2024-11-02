// routes/courseRoutes.js
const express = require('express');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getAllCourses);
router.get('/:id', auth, getCourseById);
router.post('/', auth, createCourse);
router.put('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);

module.exports = router;
