const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    client: String,
    company: String,
    request: String,
    progress: String
});

module.exports = mongoose.model('Posts', PostSchema);