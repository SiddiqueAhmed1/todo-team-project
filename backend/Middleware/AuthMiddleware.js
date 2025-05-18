const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("@/Models/UserModel");
const config = require("@/config/Config");
const { HttpStatusCode, ErrorType, UserRole } = require("@/utils/Enums");
const { ApiResponse } = require("@/utils/ResponseHandler");
const { AppError } = require("@/Handler/ErrorHandler");

/**
 * Middleware to protect routes - verifies JWT token
 */
const protect = asyncHandler(async (req, res, next) => {
	let token;

	// Check for token in headers
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			// Get token from header
			token = req.headers.authorization.split(" ")[1];

			// Verify token
			const decoded = jwt.verify(token, config.jwt.accessTokenSecret);

			// Get user from token
			req.user = await User.findById(decoded.id).select("-password");

			if (!req.user) {
				throw new AppError(
					"User not found",
					HttpStatusCode.UNAUTHORIZED,
					ErrorType.AUTHENTICATION_ERROR
				);
			}

			if (!req.user.isActive) {
				throw new AppError(
					"User account is deactivated",
					HttpStatusCode.FORBIDDEN,
					ErrorType.AUTHENTICATION_ERROR
				);
			}

			next();
		} catch (error) {
			if (error.name === "JsonWebTokenError") {
				throw new AppError(
					"Invalid token",
					HttpStatusCode.UNAUTHORIZED,
					ErrorType.AUTHENTICATION_ERROR
				);
			} else if (error.name === "TokenExpiredError") {
				throw new AppError(
					"Token expired",
					HttpStatusCode.UNAUTHORIZED,
					ErrorType.AUTHENTICATION_ERROR
				);
			} else {
				throw error;
			}
		}
	}

	if (!token) {
		throw new AppError(
			"Not authorized, no token provided",
			HttpStatusCode.UNAUTHORIZED,
			ErrorType.AUTHENTICATION_ERROR
		);
	}
});

/**
 * Middleware to check user roles
 * @param {Array} roles - Array of allowed roles
 */
const authorize = (roles) => {
	return (req, res, next) => {
		if (!req.user) {
			throw new AppError(
				"User not authenticated",
				HttpStatusCode.UNAUTHORIZED,
				ErrorType.AUTHENTICATION_ERROR
			);
		}

		if (!roles.includes(req.user.role)) {
			throw new AppError(
				"Not authorized to access this resource",
				HttpStatusCode.FORBIDDEN,
				ErrorType.AUTHORIZATION_ERROR
			);
		}

		next();
	};
};

// Middleware shortcuts for common role checks
const admin = authorize([UserRole.ADMIN]);
const superAdmin = authorize([UserRole.SUPER_ADMIN]);
const adminOrSuperAdmin = authorize([UserRole.ADMIN, UserRole.SUPER_ADMIN]);

module.exports = {
	protect,
	authorize,
	admin,
	superAdmin,
	adminOrSuperAdmin,
};
