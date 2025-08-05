const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ Intern Portal Backend is running");
});

// ✅ Dummy API for user info
app.get("/api/user", (req, res) => {
  res.json({
    name: "Sheryl Fernando",
    referralCode: "sheryl2025",
    totalDonations: 15750,
  });
});

// ✅ Dummy API for leaderboard
app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Sheryl", donations: 15750 },
    { name: "Alex", donations: 12000 },
    { name: "Priya", donations: 11000 },
  ]);
});

// ✅ Dummy API for signup
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log("✅ Signup request received:", { name, email, password });

  // Simulate success
  res.json({ message: "Signup successful!" });
});

// ✅ Dummy API for login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log("✅ Login request received:", { email, password });

  // Dummy check (replace with real auth later)
  if (email === "sheryl@example.com" && password === "123456") {
    res.json({
      message: "Login successful",
      user: {
        name: "Sheryl Fernando",
        referralCode: "sheryl2025",
        totalDonations: 15750,
      },
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
