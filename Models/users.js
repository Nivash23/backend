const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }

});
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;