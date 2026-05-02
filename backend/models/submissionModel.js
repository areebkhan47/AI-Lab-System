const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lab: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lab'
    },
    code: String,
    grade: String,
    feedback: String
});

module.exports = mongoose.model('Submission', submissionSchema);