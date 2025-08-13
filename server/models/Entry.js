const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",    
    required: true
  },
  date: { type: String, required: true },
  weight: { type: Number, required: true },
  bloodPressure: String,
  bloodSugar: Number,
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model("Entry", entrySchema);
