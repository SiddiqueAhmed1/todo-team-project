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
const todoRoutes = require("./Routes/TodoRoutes");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

//  log incoming requests in dev or prod.
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});


// Routes
app.use("/api", limiter); // Apply rate limiting only to specific routes
app.use("/auth", authRoutes);
app.use("/api/v1/todos", todoRoutes);


// Security Middleware
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

;



// @desc    Test route
// @route   GET /test
// @access  Public
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});


// Error handling middleware
app.use(errorHandler);

// Start the server based on the environment
// Start the server based on the environment
if (
  process.env.NODE_ENV === "local" ||
  process.env.NODE_ENV === "development"
) {
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`.bgGreen.black);
  });
} else {
  app.listen(SERVER_PORT);
}
