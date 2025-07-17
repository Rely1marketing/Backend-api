const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  namn: String,
  email: String,
  meddelande: String
});

module.exports = mongoose.model("Message", messageSchema);
