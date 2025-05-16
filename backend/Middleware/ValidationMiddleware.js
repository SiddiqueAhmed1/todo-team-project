const { validationResult } = require("express-validator");
const { HttpStatusCode, ErrorType } = require("@/utils/Enums");
const { ApiResponse } = require("@/utils/ResponseHandler");

/**
 * Middleware to validate request data
 */
const validateRequest = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return ApiResponse.error(
			res,
			HttpStatusCode.BAD_REQUEST,
			"Validation error",
			ErrorType.VALIDATION_ERROR,
			errors.array()
		);
	}
	next();
};

module.exports = { validateRequest };
