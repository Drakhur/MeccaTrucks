// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./User');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());





// other  routes go here

/** */
app.post('/register', async (req, res) => {
  try{
    const existingUser = await User.findOne({ email: req.body.email });
    
    if (existingUser) return res.status(400).send({ error: 'Email already in use.'});
  
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    user.password = undefined;
    res.status(201).send({user, token})
  } catch(e){
    res.status(400).send(e);
  }
});

app.post('/login', async (req, res) => {
  try{
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken()
    // Return json web token instead of the entire user object
    res.send({token}).cookie("jwt", token, { httpOnly: true }).send();
  } catch(e) {
    res.status(400).send(e);
  }
});

const verifyToken = require('./middleware/verify-token');

// Route that requires a valid JWT for access, otherwise returns a 401 status and an error message
app.get("/protected", verifyToken ,async (req,res)=>{
  res.send(`Welcome to the protected route ${req.userId}`);
});

// Route that checks if the provided token is expired or not, it will return a message depending on whether the token is valid or exp


/*
 * Error handling middleware - has to be at the end of all routes!
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    error: err.message
  })
});

module.exports = app;


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));