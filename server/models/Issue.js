const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 4, maxlength: 100 },
    description: { type: String, maxlength: 2000 },
    status: { type: String, enum: ['open', 'in_progress', 'done'], default: 'open' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    tags: [{ type: String }],
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
}, { timestamps: true });

issueSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Issue', issueSchema);
