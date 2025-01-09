
const mongoose = require('mongoose');

// Example Mongoose model for a simple collection
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
    