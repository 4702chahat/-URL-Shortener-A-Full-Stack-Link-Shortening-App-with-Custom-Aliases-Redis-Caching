const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortCode: { type: String, unique: true },
  longUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema);
