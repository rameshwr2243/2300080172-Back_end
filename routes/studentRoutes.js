const express = require('express');
const {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');
const router = express.Router();

router.get('/', getAllStudents);
router.post('/', createStudent);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
