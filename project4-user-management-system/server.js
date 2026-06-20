const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Replace with YOUR MongoDB URL
mongoose.connect("mongodb://anjali123:Anjali%40123@ac-3gjnkm8-shard-00-00.wcnh5dl.mongodb.net:27017,ac-3gjnkm8-shard-00-01.wcnh5dl.mongodb.net:27017,ac-3gjnkm8-shard-00-02.wcnh5dl.mongodb.net:27017/userDB?ssl=true&replicaSet=atlas-ffseju-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String
});

const User = mongoose.model("User", userSchema);

// GET users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ADD user
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// DELETE user
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// UPDATE user
app.put('/api/users/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});