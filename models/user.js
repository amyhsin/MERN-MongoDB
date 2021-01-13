const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    PhoneNumber: {
        type: String
    },
    Suggestion: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;