const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// Get all members for a user
router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    if (!userId) return res.status(400).json({ error: 'userId is required' });

    const members = await Member.find({ userId });
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

// Add a new member
router.post('/', async (req, res) => {
  try {
    const { name, age, gender, allergies, pastSurgeries, currentMedications, userId } = req.body;

    if (!name || !userId) {
      return res.status(400).json({ error: 'Name and userId are required' });
    }

    const member = new Member({
      name,
      age,
      gender,
      allergies,
      pastSurgeries,
      currentMedications,
      userId,
    });

    const savedMember = await member.save();
    res.status(201).json({ success: true, member: savedMember });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add member' });
  }
});

module.exports = router; 
