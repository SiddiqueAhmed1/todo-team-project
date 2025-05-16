const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// @desc    Test route
// @route   GET /test
// @access  Public
app.get("/test", (req, res) => {
	res.send("Test route is working!");
});

// Start the server
if (
	process.env.NODE_ENV === "local" ||
	process.env.NODE_ENV === "development"
) {
	app.listen(SERVER_PORT, () => {
		console.log(`Server is running on http://localhost:${SERVER_PORT}`);
	});
} else {
	app.listen(SERVER_PORT);
}
