const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');
const verifyToken = require('../middleware/verifyToken'); // ⬅️ Make sure you have this middleware

// ✅ POST /api/entries - Add entry for logged-in user
router.post('/', verifyToken, async (req, res) => {
  try {
    const { date, weight, bloodPressure, bloodSugar, notes } = req.body;

    const newEntry = await Entry.create({
      userId: req.user.id, // ⬅️ Attach logged-in user's ID
      date,
      weight: Number(weight),
      bloodPressure,
      bloodSugar: Number(bloodSugar),
      notes,
    });

    res.status(201).json(newEntry);
  } catch (error) {
    console.error("Entry Creation Error:", error);
    res.status(500).json({ message: "Failed to create entry" });
  }
});

// ✅ GET /api/entries - Fetch only current user's entries
router.get("/", verifyToken, async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.user.id }) // ⬅️ Filter by user
      .sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (error) {
    console.error("Failed to fetch entries:", error);
    res.status(500).json({ message: "Error fetching entries" });
  }
});

module.exports = router;
