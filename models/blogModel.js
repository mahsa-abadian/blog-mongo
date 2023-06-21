const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: String,
    text: String
});

mongoose.model('blogPost',blogPostSchema);


module.exports = blogPost