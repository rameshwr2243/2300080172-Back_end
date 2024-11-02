const express = require('express');
const { getAllFaculty, createFaculty } = require('../controllers/facultyController');
const router = express.Router();

router.get('/', getAllFaculty);
router.post('/', createFaculty);

module.exports = router;
