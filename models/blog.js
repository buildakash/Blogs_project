const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippets:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{timestamps: true});

//creating mongoose model for this blogschema
const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;