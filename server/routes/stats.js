const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, (req, res) => {
  res.json({
    totalEntries: 10,
    averageMood: "Happy",
    highEnergyDays: 5,
    lowEnergyDays: 2,
  });
});

module.exports = router;
