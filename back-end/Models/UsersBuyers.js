const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', usersSchema);
module.exports = User;