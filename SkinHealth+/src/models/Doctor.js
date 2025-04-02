const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  experience: Number,
  availability: [String], // e.g., ["Monday 10 AM", "Tuesday 3 PM"]
  email: String,
  password: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);
