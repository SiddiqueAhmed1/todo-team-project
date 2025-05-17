const asyncHandler = require("express-async-handler");
const { AuthService } = require("@/Services/AuthService");
const { TokenService } = require("@/Services/TokenService");
const { HttpStatusCode, ErrorType } = require("@/utils/Enums");
const { ApiResponse } = require("@/utils/ResponseHandler");

const authService = new AuthService();
const tokenService = new TokenService();

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const user = await authService.registerUser(name, email, password);

	if (user) {
		const accessToken = tokenService.generateAccessToken(user._id);
		const refreshToken = tokenService.generateRefreshToken(user._id);

		await tokenService.saveRefreshToken(user._id, refreshToken);

		return ApiResponse.success(
			res,
			HttpStatusCode.CREATED,
			"User registered successfully",
			{
				_id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
				accessToken,
				refreshToken,
			}
		);
	}
});

/**
 * @desc    Authenticate a user
 * @route   POST /api/auth/login
 * @access  Public
 */
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await authService.loginUser(email, password);

	if (user) {
		const accessToken = tokenService.generateAccessToken(user._id);
		const refreshToken = tokenService.generateRefreshToken(user._id);

		await tokenService.saveRefreshToken(user._id, refreshToken);

		return ApiResponse.success(res, HttpStatusCode.OK, "Login successful", {
			_id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
			accessToken,
			refreshToken,
		});
	}
});

/**
 * @desc    Logout a user
 * @route   POST /api/auth/logout
 * @access  Private
 */
const logoutUser = asyncHandler(async (req, res) => {
	const userId = req.user._id;

	await tokenService.removeRefreshToken(userId);

	return ApiResponse.success(res, HttpStatusCode.OK, "Logout successful");
});

/**
 * @desc    Refresh access token
 * @route   POST /api/auth/refresh-token
 * @access  Public
 */
const refreshToken = asyncHandler(async (req, res) => {
	const { refreshToken } = req.body;

	if (!refreshToken) {
		return ApiResponse.error(
			res,
			HttpStatusCode.UNAUTHORIZED,
			"Refresh token is required",
			ErrorType.AUTHENTICATION_ERROR
		);
	}

	const userData = await tokenService.verifyRefreshToken(refreshToken);
	const userRefreshToken = await tokenService.findRefreshToken(
		userData.id,
		refreshToken
	);

	if (!userRefreshToken) {
		return ApiResponse.error(
			res,
			HttpStatusCode.UNAUTHORIZED,
			"Invalid or expired refresh token",
			ErrorType.AUTHENTICATION_ERROR
		);
	}

	const user = await authService.findUserById(userData.id);

	if (!user) {
		return ApiResponse.error(
			res,
			HttpStatusCode.UNAUTHORIZED,
			"User not found",
			ErrorType.AUTHENTICATION_ERROR
		);
	}

	const accessToken = tokenService.generateAccessToken(user._id);
	const newRefreshToken = tokenService.generateRefreshToken(user._id);

	await tokenService.updateRefreshToken(
		user._id,
		refreshToken,
		newRefreshToken
	);

	return ApiResponse.success(
		res,
		HttpStatusCode.OK,
		"Token refreshed successfully",
		{
			accessToken,
			refreshToken: newRefreshToken,
		}
	);
});

/**
 * @desc    Request password reset
 * @route   POST /api/auth/forgot-password
 * @access  Public
 */
const forgotPassword = asyncHandler(async (req, res) => {
	const { email } = req.body;

	/** For testing/demo purposes only, the reset token is returned in the response
	 *	In a production environment, this should be sent through email or other provider
	 *	to verify the user's identity and allow them to reset their password securely.
	 */
	const resetToken = await authService.requestPasswordReset(email);

	return ApiResponse.success(
		res,
		HttpStatusCode.OK,
		"Password reset token generated",
		{ resetToken }
	);
});

/**
 * @desc    Reset password
 * @route   POST /api/auth/reset-password
 * @access  Public
 */
const resetPassword = asyncHandler(async (req, res) => {
	const { token, password } = req.body;

	await authService.resetPassword(token, password);

	return ApiResponse.success(
		res,
		HttpStatusCode.OK,
		"Password reset successful"
	);
});

/**
 * @desc    Get current user profile
 * @route   GET /api/auth/profile
 * @access  Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await authService.findUserById(req.user._id);

	if (user) {
		return ApiResponse.success(
			res,
			HttpStatusCode.OK,
			"User profile retrieved",
			{
				_id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			}
		);
	}
});

/**
 * @desc    Update user profile
 * @route   PUT /api/auth/profile
 * @access  Private
 */
const updateUserProfile = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const updatedUser = await authService.updateUserProfile(
		req.user._id,
		name,
		email,
		password
	);

	if (updatedUser) {
		return ApiResponse.success(
			res,
			HttpStatusCode.OK,
			"User profile updated",
			{
				_id: updatedUser._id,
				name: updatedUser.name,
				email: updatedUser.email,
				role: updatedUser.role,
			}
		);
	}
});

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	refreshToken,
	forgotPassword,
	resetPassword,
	getUserProfile,
	updateUserProfile,
};
