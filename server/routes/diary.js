const express = require('express');
const router = express.Router();
const Diary = require('../models/Diary');
const auth = require('../middleware/auth');

// Get all diary entries for a user
router.get('/', auth, async (req, res) => {
    try {
        const diaries = await Diary.find({ user: req.user.userId })
            .sort({ date: -1 });
        res.json(diaries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching diary entries', error: error.message });
    }
});

// Create new diary entry
router.post('/', auth, async (req, res) => {
    try {
        const { content, emotionScore, emotionLabel, tags } = req.body;
        
        const diary = new Diary({
            user: req.user.userId,
            content,
            emotionScore,
            emotionLabel,
            tags
        });

        await diary.save();
        res.status(201).json(diary);
    } catch (error) {
        res.status(500).json({ message: 'Error creating diary entry', error: error.message });
    }
});

// Get a specific diary entry
router.get('/:id', auth, async (req, res) => {
    try {
        const diary = await Diary.findOne({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!diary) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }

        res.json(diary);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching diary entry', error: error.message });
    }
});

// Update a diary entry
router.put('/:id', auth, async (req, res) => {
    try {
        const { content, emotionScore, emotionLabel, tags } = req.body;
        
        const diary = await Diary.findOneAndUpdate(
            { _id: req.params.id, user: req.user.userId },
            { content, emotionScore, emotionLabel, tags },
            { new: true }
        );

        if (!diary) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }

        res.json(diary);
    } catch (error) {
        res.status(500).json({ message: 'Error updating diary entry', error: error.message });
    }
});

// Delete a diary entry
router.delete('/:id', auth, async (req, res) => {
    try {
        const diary = await Diary.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId
        });

        if (!diary) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }

        res.json({ message: 'Diary entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting diary entry', error: error.message });
    }
});

module.exports = router; 