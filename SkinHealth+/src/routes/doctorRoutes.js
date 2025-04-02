const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

const router = express.Router();

// Get all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// Doctor login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const doctor = await Doctor.findOne({ email });

  if (!doctor || !bcrypt.compareSync(password, doctor.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: doctor._id }, "secret", { expiresIn: "1h" });
  res.json({ token, doctor });
});

module.exports = router;
