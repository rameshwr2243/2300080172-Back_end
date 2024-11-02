const Faculty = require('../models/Faculty');

exports.getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFaculty = async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
