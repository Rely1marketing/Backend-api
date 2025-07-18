const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Message = require("./models/Message");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Ansluten till MongoDB"))
  .catch(err => console.error("Fel vid anslutning:", err));

app.post("/api/messages", async (req, res) => {
  try {
    const newMsg = new Message(req.body);
    await newMsg.save();
    res.status(201).json({ message: "Meddelande sparat!" });
  } catch (err) {
    res.status(500).json({ error: "Fel vid sparning" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servern körs på port ${PORT}`)
);
