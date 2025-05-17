const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const {
	registerUser,
	loginUser,
	logoutUser,
	refreshToken,
	forgotPassword,
	resetPassword,
	getUserProfile,
	updateUserProfile,
} = require("@/Controllers/AuthController");
const { protect } = require("@/Middleware/AuthMiddleware");
const { validateRequest } = require("@/Middleware/ValidationMiddleware");

// @route   POST /api/auth/register
router.post(
	"/register",
	[
		body("name").notEmpty().withMessage("Name is required"),
		body("email").isEmail().withMessage("Please enter a valid email"),
		body("password")
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters long"),
	],
	validateRequest,
	registerUser
);

// @route   POST /api/auth/login
router.post(
	"/login",
	[
		body("email").isEmail().withMessage("Please enter a valid email"),
		body("password").notEmpty().withMessage("Password is required"),
	],
	validateRequest,
	loginUser
);

// @route   POST /api/auth/logout
router.post("/logout", protect, logoutUser);

// @route   POST /api/auth/refresh-token
router.post(
	"/refresh-token",
	[body("refreshToken").notEmpty().withMessage("Refresh token is required")],
	validateRequest,
	refreshToken
);

// @route   POST /api/auth/forgot-password
router.post(
	"/forgot-password",
	[body("email").isEmail().withMessage("Please enter a valid email")],
	validateRequest,
	forgotPassword
);

// @route   POST /api/auth/reset-password
router.post(
	"/reset-password",
	[
		body("token").notEmpty().withMessage("Token is required"),
		body("password")
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters long"),
	],
	validateRequest,
	resetPassword
);

// @route   GET /api/auth/profile
router.get("/profile", protect, getUserProfile);

// @route   PUT /api/auth/profile
router.put(
	"/profile",
	protect,
	[
		body("name").optional(),
		body("email")
			.optional()
			.isEmail()
			.withMessage("Please enter a valid email"),
		body("password")
			.optional()
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters long"),
	],
	validateRequest,
	updateUserProfile
);

module.exports = router;
