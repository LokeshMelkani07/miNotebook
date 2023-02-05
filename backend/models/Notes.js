// It is a modal so first name should be capital
// This is for the notes to be entered by the user
const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "General",
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
