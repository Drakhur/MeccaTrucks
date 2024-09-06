const mongoose = require('mongoose');
require ('dotenv').config();

const uri = process.env.MONGODB_URL;
console.log(uri);

const connectDB = () =>{
    return mongoose.connect(uri);
}
module.exports = connectDB;


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (username) => {
        return username.length >= 3 && username.length <= 20;
      },
      message: 'Username must be between 3 and 20 characters long',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
      },
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long',
    },
  },
});

module.exports = mongoose.model('User', userSchema);