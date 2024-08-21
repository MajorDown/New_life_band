import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.models.user || mongoose.model("user", UserSchema);
