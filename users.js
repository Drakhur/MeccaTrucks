
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
// TODO: Add validation for the following fields:
/*
- Username must be between 3 and 20 characters long
- Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !
- Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !.
- Password must be at least 8 characters long
*/
