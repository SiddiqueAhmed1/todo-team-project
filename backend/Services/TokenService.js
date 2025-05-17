const jwt = require("jsonwebtoken");
const config = require("@/config/config");
const User = require("@/models/userModel");
const { AppError } = require("@/Handler/errorHandler");
const { HttpStatusCode, ErrorType } = require("@/utils/enums");

class TokenService {
	/**
	 * Generate access token
	 * @param {string} userId
	 * @returns {string} JWT token
	 */
	generateAccessToken(userId) {
		return jwt.sign({ id: userId }, config.jwt.accessTokenSecret, {
			expiresIn: config.jwt.accessTokenExpiry,
		});
	}

	/**
	 * Generate refresh token
	 * @param {string} userId
	 * @returns {string} JWT token
	 */
	generateRefreshToken(userId) {
		return jwt.sign({ id: userId }, config.jwt.refreshTokenSecret, {
			expiresIn: config.jwt.refreshTokenExpiry,
		});
	}

	/**
	 * Save refresh token to user
	 * @param {string} userId
	 * @param {string} refreshToken
	 * @returns {Promise<User>}
	 */
	async saveRefreshToken(userId, refreshToken) {
		const user = await User.findById(userId);

		if (!user) {
			throw new AppError(
				"User not found",
				HttpStatusCode.NOT_FOUND,
				ErrorType.NOT_FOUND_ERROR
			);
		}

		user.refreshToken = refreshToken;
		await user.save();

		return user;
	}

	/**
	 * Remove refresh token from user
	 * @param {string} userId
	 * @returns {Promise<User>}
	 */
	async removeRefreshToken(userId) {
		const user = await User.findById(userId);

		if (!user) {
			throw new AppError(
				"User not found",
				HttpStatusCode.NOT_FOUND,
				ErrorType.NOT_FOUND_ERROR
			);
		}

		user.refreshToken = null;
		await user.save();

		return user;
	}

	/**
	 * Find refresh token
	 * @param {string} userId
	 * @param {string} refreshToken
	 * @returns {Promise<string>}
	 */
	async findRefreshToken(userId, refreshToken) {
		const user = await User.findOne({
			_id: userId,
			refreshToken,
		});

		if (!user) {
			return null;
		}

		return user.refreshToken;
	}

	/**
	 * Update refresh token
	 * @param {string} userId
	 * @param {string} oldRefreshToken
	 * @param {string} newRefreshToken
	 * @returns {Promise<User>}
	 */
	async updateRefreshToken(userId, oldRefreshToken, newRefreshToken) {
		const user = await User.findOne({
			_id: userId,
			refreshToken: oldRefreshToken,
		});

		if (!user) {
			throw new AppError(
				"Invalid refresh token",
				HttpStatusCode.UNAUTHORIZED,
				ErrorType.AUTHENTICATION_ERROR
			);
		}

		user.refreshToken = newRefreshToken;
		await user.save();

		return user;
	}

	/**
	 * Verify refresh token
	 * @param {string} refreshToken
	 * @returns {object} Decoded token
	 */
	async verifyRefreshToken(refreshToken) {
		try {
			const decoded = jwt.verify(
				refreshToken,
				config.jwt.refreshTokenSecret
			);
			return decoded;
		} catch (error) {
			if (error.name === "JsonWebTokenError") {
				throw new AppError(
					"Invalid refresh token",
					HttpStatusCode.UNAUTHORIZED,
					ErrorType.AUTHENTICATION_ERROR
				);
			} else if (error.name === "TokenExpiredError") {
				throw new AppError(
					"Refresh token expired",
					HttpStatusCode.UNAUTHORIZED,
					ErrorType.AUTHENTICATION_ERROR
				);
			} else {
				throw error;
			}
		}
	}
}

module.exports = { TokenService };
