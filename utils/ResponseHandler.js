require("module-alias/register");
const {
	HttpStatusCode,
	ErrorType,
	UserRole,
	UserStatus,
} = require("@/utils/Enums");

class ApiResponse {
	/**
	 * Send success response
	 * @param {object} res - Express response object
	 * @param {number} statusCode - HTTP status code
	 * @param {string} message - Success message
	 * @param {object} data - Response data
	 * @returns {object} Response
	 */
	static success(
		res,
		statusCode = HttpStatusCode.OK,
		message = "Success",
		data = {}
	) {
		return res.status(statusCode).json({
			success: true,
			message,
			data,
		});
	}

	/**
	 * Send error response
	 * @param {object} res - Express response object
	 * @param {number} statusCode - HTTP status code
	 * @param {string} message - Error message
	 * @param {string} errorType - Error type
	 * @param {object} errors - Detailed errors
	 * @returns {object} Response
	 */
	static error(
		res,
		statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR,
		message = "Error",
		errorType = ErrorType.GENERAL_ERROR,
		errors = null
	) {
		const response = {
			success: false,
			message,
			errorType,
		};

		// Include errors in development or if validation errors
		if (errors) {
			response.errors = errors;
		}

		return res.status(statusCode).json(response);
	}
}

module.exports = {
	ApiResponse,
	HttpStatusCode,
	ErrorType,
	UserRole,
	UserStatus,
};
