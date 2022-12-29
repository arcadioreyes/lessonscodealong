const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  maritalStatus: {
    type: String,
    enum: ["Married", "Single"],
  },
});

const User = model("User", userSchema);

module.exports = User;
