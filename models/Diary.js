const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    emotionScore: {
        type: Number,
        required: true
    },
    emotionLabel: {
        type: String,
        required: true,
        enum: ['positive', 'negative', 'neutral']
    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String,
        trim: true
    }]
});

module.exports = mongoose.model('Diary', diarySchema); 