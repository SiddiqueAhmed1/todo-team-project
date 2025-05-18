const { HttpStatusCode, ErrorType } = require("@/utils/Enums");
const { ApiResponse } = require("@/utils/ResponseHandler");

/**
 * Global error handling middleware
 * @param {object} err - Error object
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next function
 * @returns {object} Error response
 */
const errorHandler = (err, req, res, next) => {
	// Default error status and message
	let statusCode = err.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR;
	let message = err.message || "Something went wrong";
	let errorType = err.errorType || ErrorType.SERVER_ERROR;

	// Handle mongoose validation errors
	if (err.name === "ValidationError") {
		statusCode = HttpStatusCode.BAD_REQUEST;
		message = Object.values(err.errors)
			.map((error) => error.message)
			.join(", ");
		errorType = ErrorType.VALIDATION_ERROR;
	}

	/**
	 * Handle mongoose duplicate key errors which occur when a unique field is violated
	 * it mostly happens in development in nodejs server when the server is restarted
	 */
	if (err.code === 11000) {
		statusCode = HttpStatusCode.CONFLICT;
		message = `Duplicate value entered for ${Object.keys(
			err.keyValue
		)} field`;
		errorType = ErrorType.DUPLICATE_ERROR;
	}

	// Handle mongoose cast errors
	if (err.name === "CastError") {
		statusCode = HttpStatusCode.BAD_REQUEST;
		message = `Invalid ${err.path}: ${err.value}`;
		errorType = ErrorType.VALIDATION_ERROR;
	}

	// Handle JWT errors
	if (err.name === "JsonWebTokenError") {
		statusCode = HttpStatusCode.UNAUTHORIZED;
		message = "Invalid token";
		errorType = ErrorType.AUTHENTICATION_ERROR;
	}

	// Handle JWT expired token errors
	if (err.name === "TokenExpiredError") {
		statusCode = HttpStatusCode.UNAUTHORIZED;
		message = "Token expired";
		errorType = ErrorType.AUTHENTICATION_ERROR;
	}

	// Log error in development environment
	if (
		process.env.NODE_ENV === "development" ||
		process.env.NODE_ENV === "local"
	) {
		console.error(err);
	}

	// Send error response
	return ApiResponse.error(res, statusCode, message, errorType, err.stack);
};

/**
 * Custom error class for application errors
 */
class AppError extends Error {
	constructor(message, statusCode, errorType) {
		super(message);
		this.statusCode = statusCode;
		this.errorType = errorType;
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = { errorHandler, AppError };
