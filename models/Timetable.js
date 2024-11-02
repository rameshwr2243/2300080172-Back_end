const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({
  day: { type: String, required: true },
  period: { type: String, required: true },
  subject: { type: String, required: true },
});

module.exports = mongoose.model('Timetable', TimetableSchema);
