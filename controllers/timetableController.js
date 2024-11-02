const Timetable = require('../models/Timetable');

exports.getAllTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find();
    res.json(timetables);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTimetable = async (req, res) => {
  try {
    const newTimetable = new Timetable(req.body);
    await newTimetable.save();
    res.status(201).json(newTimetable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTimetableById = async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    if (!timetable) return res.status(404).json({ message: 'Timetable not found' });
    res.json(timetable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTimetable = async (req, res) => {
  try {
    const updatedTimetable = await Timetable.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTimetable) return res.status(404).json({ message: 'Timetable not found' });
    res.json(updatedTimetable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findByIdAndDelete(req.params.id);
    if (!timetable) return res.status(404).json({ message: 'Timetable not found' });
    res.json({ message: 'Timetable deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
