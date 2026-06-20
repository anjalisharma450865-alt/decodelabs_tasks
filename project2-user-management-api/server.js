const express = require("express");
const app = express();

app.use(express.json());

// Step 7: Temporary data storage
let users = [];

// Home route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Step 8: GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Step 9: POST - Add new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  // Validation (VERY IMPORTANT)
  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
});

// Step 11: DELETE user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(user => user.id !== id);

  res.json({
    message: "User deleted successfully"
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});