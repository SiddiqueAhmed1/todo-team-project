/**
 * HTTP Status codes
 */
const HttpStatusCode = {
	OK: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	CONFLICT: 409,
	UNPROCESSABLE_ENTITY: 422,
	INTERNAL_SERVER_ERROR: 500,
};

/**
 * Error types
 */
const ErrorType = {
	VALIDATION_ERROR: "VALIDATION_ERROR",
	AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
	AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
	NOT_FOUND_ERROR: "NOT_FOUND_ERROR",
	DUPLICATE_ERROR: "DUPLICATE_ERROR",
	SERVER_ERROR: "SERVER_ERROR",
};

/**
 * User roles
 */
const UserRole = {
	USER: "user",
	ADMIN: "admin",
	SUPER_ADMIN: "super_admin",
};

/**
 * User status
 */
const UserStatus = {
	ACTIVE: "active",
	INACTIVE: "inactive",
	SUSPENDED: "suspended",
	DELETED: "deleted",
};

module.exports = {
	HttpStatusCode,
	ErrorType,
	UserRole,
	UserStatus,
};
