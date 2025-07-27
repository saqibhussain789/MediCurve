const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// POST /api/entries
router.post('/entries', async (req, res) => {
  try {
    const { date, weight, bloodPressure, bloodSugar, notes } = req.body;

    const newEntry = await Entry.create({
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

// GET /api/entries
router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (error) {
    console.error("Failed to fetch entries:", error);
    res.status(500).json({ message: "Error fetching entries" });
  }
});


module.exports = router;
