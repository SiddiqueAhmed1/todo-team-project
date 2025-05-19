const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { UserRole, UserStatus } = require("@/utils/Enums");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			trim: true,
		},
		username: {
			type: String,
			required: [true, "Username is required"],
			lowercase: true,
			unique: true
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			trim: true,
			lowercase: true,
			match: [
				/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
				"Please enter a valid email address",
			],
		},
		contactNumber: {
			type: Number,
			unique: true
		},
		position: {
			type: String
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password must be at least 6 characters"],
		},
		myTasks: 
           [
			{
				type: mongoose.Types.ObjectId,
				unique: true
			}

		   ],
		   vitalTasks: 
           [
			{
				type: mongoose.Types.ObjectIdc,
				unique: true
			}
		   ],
		role: {
			type: String,
			enum: Object.values(UserRole),
			default: UserRole.USER,
		},
		status: {
			type: String,
			enum: Object.values(UserStatus),
			default: UserStatus.ACTIVE,
		},
		refreshToken: {
			type: String,
		},
		resetPasswordToken: {
			type: String,
		},
		resetPasswordExpire: {
			type: Date,
		},
		lastLogin: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

// Encrypt password before saving
userSchema.pre("save", async function (next) {
	// Only hash password if it was modified
	if (!this.isModified("password")) {
		return next();
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

// Check if password matches
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// Generate reset password token
userSchema.methods.generateResetPasswordToken = function () {
	// Generate token
	const resetToken = crypto.randomBytes(32).toString("hex");

	// Hash token and set to resetPasswordToken field
	this.resetPasswordToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex");

	// Set token expire time (1 hour)
	this.resetPasswordExpire = Date.now() + 3600000; // 1 hour

	return resetToken;
};

// Virtual property to check if user is active
userSchema.virtual("isActive").get(function () {
	return this.status === UserStatus.ACTIVE;
});

// Check if model already exists to prevent OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
