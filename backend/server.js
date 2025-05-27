const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
require("module-alias/register"); // Register module aliases for cleaner imports
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const connectDB = require("@/config/DB");
const { errorHandler } = require("@/Handler/ErrorHandler");
const authRoutes = require("@/Routes/AuthRoutes");
const color = require("colors");
const curdRoutes = require("./Routes/curdRoutes");

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Routes
app.use("/auth", authRoutes);
app.use("/curd", curdRoutes);

// @desc    Test route
// @route   GET /test
// @access  Public
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Error handling middleware
app.use(errorHandler);

// Start the server based on the environment

app.listen(SERVER_PORT, () => {
  console.log(
    `Server is running on http://localhost:${SERVER_PORT}`.bgGreen.black
  );
});
