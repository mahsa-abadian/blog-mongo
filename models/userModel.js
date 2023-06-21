const mongoose = require('moongose');
const Schema = mongoose.Schema

const userShema = new Schema({
    username: String,
    password: String
})


mongoose.model('user',userShema);

module.exports = user