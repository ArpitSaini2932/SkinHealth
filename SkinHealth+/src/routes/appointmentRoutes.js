const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, doctorId, date } = req.body;
  const appointment = new Appointment({ userId, doctorId, date });
  await appointment.save();
  res.json({ message: "Appointment booked!" });
});

// Get user appointments
router.get("/:userId", async (req, res) => {
  const appointments = await Appointment.find({ userId: req.params.userId });
  res.json(appointments);
});

module.exports = router;
