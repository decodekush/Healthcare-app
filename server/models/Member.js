const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: Number,
  gender: String,
  relation: String,
  allergies: [String],
  conditions: String, // e.g., "Diabetes, Hypertension"
  medications: [String], // e.g., ["Paracetamol", "Metformin"]
  prescriptions: [
    {
      fileUrl: String, // If using cloud storage later
      uploadedAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model('Member', memberSchema);
