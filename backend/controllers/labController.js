const Lab = require('../models/labModel');

// CREATE LAB
const createLab = async (req, res) => {
    const { title, description } = req.body;

    const lab = await Lab.create({
        title,
        description,
        createdBy: req.user.id
    });

    res.json(lab);
};

module.exports = { createLab };

const getLabs = async (req, res) => {
    const labs = await Lab.find();
    res.json(labs);
};

module.exports = { createLab, getLabs };

const Submission = require('../models/submissionModel');

const submitLab = async (req, res) => {
    const { labId, code } = req.body;

    const submission = await Submission.create({
        student: req.user.id,
        lab: labId,
        code
    });

    res.json(submission);
};