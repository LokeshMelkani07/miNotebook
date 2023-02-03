// It is a modal so first name should be capital
// This is for the user who will log in the app
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
