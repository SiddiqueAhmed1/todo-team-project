const config = {
	jwt: {
		accessTokenSecret:
			process.env.JWT_ACCESS_SECRET ||
			"access_secret_key_change_in_production",
		refreshTokenSecret:
			process.env.JWT_REFRESH_SECRET ||
			"refresh_secret_key_change_in_production",
		accessTokenExpiry: process.env.JWT_ACCESS_EXPIRY || "15m",
		refreshTokenExpiry: process.env.JWT_REFRESH_EXPIRY || "7d",
	},
	passwordReset: {
		tokenExpiry: process.env.PASSWORD_RESET_EXPIRY || 3600000, // 1 hour in milliseconds
	},
	email: {
		from: process.env.EMAIL_FROM || "noreply@example.com",
	},
};

module.exports = config;
