require("module-alias/register");
const User = require("@/Models/UserModel");
const crypto = require("crypto");
const { AppError } = require("@/Handler/ErrorHandler");
const { HttpStatusCode, ErrorType } = require("@/utils/Enums");

class AuthService {
	/**
	 * Register a new user
	 * @param {string} name
	 * @param {string} email
	 * @param {string} password
	 * @returns {Promise<User>}
	 */
	async registerUser(name, email, password) {
		const userExists = await User.findOne({ email });

		if (userExists) {
			throw new AppError(
				"User already exists",
				HttpStatusCode.BAD_REQUEST,
				ErrorType.DUPLICATE_ERROR
			);
		}

		const user = await User.create({
			name,
			email,
			password,
		});

		return user;
	}

	/**
	 * Authenticate user
	 * @param {string} email
	 * @param {string} password
	 * @returns {Promise<User>}
	 */
	async loginUser(email, password) {
		const user = await User.findOne({ email });

		// Check if user exists and password matches
		if (!user || !(await user.matchPassword(password))) {
			throw new AppError(
				"Invalid email or password",
				HttpStatusCode.UNAUTHORIZED,
				ErrorType.AUTHENTICATION_ERROR
			);
		}

		// Check if user is active
		if (!user.isActive) {
			throw new AppError(
				"Your account has been deactivated",
				HttpStatusCode.FORBIDDEN,
				ErrorType.AUTHENTICATION_ERROR
			);
		}

		// Update last login
		user.lastLogin = Date.now();
		await user.save();

		return user;
	}

	/**
	 * Find user by ID
	 * @param {string} id
	 * @returns {Promise<User>}
	 */
	async findUserById(id) {
		const user = await User.findById(id);

		if (!user) {
			throw new AppError(
				"User not found",
				HttpStatusCode.NOT_FOUND,
				ErrorType.NOT_FOUND_ERROR
			);
		}

		return user;
	}

	/**
	 * Update user profile
	 * @param {string} userId
	 * @param {string} name
	 * @param {string} email
	 * @param {string} password
	 * @returns {Promise<User>}
	 */
	async updateUserProfile(userId, name, email, password) {
		const user = await this.findUserById(userId);

		// Update fields
		if (name) user.name = name;
		if (email) {
			// Check if email is already in use by another user
			const emailExists = await User.findOne({
				email,
				_id: { $ne: userId },
			});

			if (emailExists) {
				throw new AppError(
					"Email already in use",
					HttpStatusCode.BAD_REQUEST,
					ErrorType.DUPLICATE_ERROR
				);
			}

			user.email = email;
		}
		if (password) user.password = password;

		const updatedUser = await user.save();

		return updatedUser;
	}

	/**
	 * Request password reset
	 * @param {string} email
	 * @returns {Promise<string>} Reset token
	 */
	async requestPasswordReset(email) {
		const user = await User.findOne({ email });

		if (!user) {
			throw new AppError(
				"User not found",
				HttpStatusCode.NOT_FOUND,
				ErrorType.NOT_FOUND_ERROR
			);
		}

		// Generate reset token
		const resetToken = user.generateResetPasswordToken();

		await user.save({ validateBeforeSave: false });

		// Here you would send an email with the reset link
		// const resetUrl = `https://example.com/api/auth/reset-password/${resetToken}`;

		// For testing/demo purposes, return the token
		return resetToken;
	}

	/**
	 * Reset password
	 * @param {string} token
	 * @param {string} password
	 * @returns {Promise<User>}
	 */
	async resetPassword(token, password) {
		// Hash token
		const resetPasswordToken = crypto
			.createHash("sha256")
			.update(token)
			.digest("hex");

		// Find user by reset token and check if token is still valid
		const user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpire: { $gt: Date.now() },
		});

		if (!user) {
			throw new AppError(
				"Invalid or expired token",
				HttpStatusCode.BAD_REQUEST,
				ErrorType.VALIDATION_ERROR
			);
		}

		// Set new password and clear reset token fields
		user.password = password;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;

		await user.save();

		return user;
	}
}

module.exports = { AuthService };
