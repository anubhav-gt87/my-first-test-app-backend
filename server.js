const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserEntry = require('./models/UserEntry');

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 connect to database
mongoose.connect("mongodb+srv://anubgupt_db_user:fNrpuizDWNPjeQPR@myfirstapp-mongodb.actj3nf.mongodb.net/?appName=myfirstapp-mongodb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 🧾 Save data route
app.post("/save", async (req, res) => {
  const { text } = req.body;

  const newEntry = new UserEntry({ text });
  await newEntry.save();

  res.json({ message: "Saved!", entry: newEntry });
});

// 📄 Get all entries
app.get("/entries", async (req, res) => {
  const entries = await UserEntry.find().sort({ createdAt: -1 });
  res.json(entries);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

