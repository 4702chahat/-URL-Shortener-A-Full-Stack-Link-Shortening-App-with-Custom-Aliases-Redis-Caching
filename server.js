const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();
app.use(express.json());

// 🔹 Serve static files (HTML/CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

// 🔹 Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// 🔹 Health check route (optional)
app.get("/api/health", (req, res) => {
  res.send("✅ URL Shortener API is healthy!");
});

// 🔹 API Routes
app.use("/", require("./routes/url"));

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
