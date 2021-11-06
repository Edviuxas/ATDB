const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersBuyerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UsersBuyer = mongoose.model('users-buyer', usersBuyerSchema);
module.exports = UsersBuyer;