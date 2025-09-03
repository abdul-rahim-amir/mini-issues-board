const Issue = require('../models/Issue');

exports.createIssue = async (req, res, next) => {
    try {
        const issue = await Issue.create(req.body);
        res.status(201).json(issue);
    } catch (error) {
        next(error);
    }
};

exports.getIssues = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, status, priority, tags, q, sortBy = 'createdAt', order = 'desc' } = req.query;
        let filter = {};

        if (status) filter.status = status;
        if (priority) filter.priority = priority;
        if (tags) filter.tags = { $in: tags.split(',') };
        if (q) filter.$text = { $search: q };

        const issues = await Issue.find(filter)
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Issue.countDocuments(filter);

        res.json({ total, page: parseInt(page), issues });
    } catch (error) {
        next(error);
    }
};

exports.getIssueById = async (req, res, next) => {
    try {
        const issue = await Issue.findById(req.params.id);
        if (!issue) return res.status(404).json({ message: 'Issue not found' });
        res.json(issue);
    } catch (error) {
        next(error);
    }
};

exports.updateIssue = async (req, res, next) => {
    try {
        const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(issue);
    } catch (error) {
        next(error);
    }
};

exports.deleteIssue = async (req, res, next) => {
    try {
        await Issue.findByIdAndDelete(req.params.id);
        res.json({ message: 'Issue deleted' });
    } catch (error) {
        next(error);
    }
};
