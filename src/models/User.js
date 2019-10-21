const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String, required: true }
});

userSchema.pre("save", next => {
  next();
});

module.exports = mongoose.model("user", userSchema);
