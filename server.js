const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Dummy API for user info
app.get("/api/user", (req, res) => {
  res.json({
    name: "Sheryl Fernando",
    referralCode: "sheryl2025",
    totalDonations: 15750
  });
});

// Dummy API for leaderboard
app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Sheryl", donations: 15750 },
    { name: "Alex", donations: 12000 },
    { name: "Priya", donations: 11000 }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
