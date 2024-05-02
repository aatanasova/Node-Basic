const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        requird: true
    },
    snippet: {
        type: String,
        requird: true
    },
    body: {
        type: String,
        requird: true
    },

}, { timestamps: true})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;