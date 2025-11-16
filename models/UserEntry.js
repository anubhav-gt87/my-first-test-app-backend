const mongoose = require("mongoose");

const UserEntrySchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UserEntry", UserEntrySchema);
