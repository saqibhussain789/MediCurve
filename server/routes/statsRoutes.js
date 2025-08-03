// routes/stats.js (or wherever your routes are defined)
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Entry = require('../models/Entry'); // Your Mongoose model

router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id; // 👈 make sure verifyToken sets this
    const entries = await Entry.find({ user: userId });

    const total = entries.length;
    const avgWeight = entries.reduce((sum, e) => sum + e.weight, 0) / total || 0;
    const avgSugar = entries.reduce((sum, e) => sum + e.bloodSugar, 0) / total || 0;

    res.json({
      totalEntries: total,
      averageWeight: avgWeight.toFixed(2),
      averageBloodSugar: avgSugar.toFixed(2),
    });
  } catch (err) {
    res.status(500).json({ message: "Stats error", error: err.message });
  }
});


module.exports = router;
