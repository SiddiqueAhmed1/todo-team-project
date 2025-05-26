require("module-alias/register");
const mongoose = require("mongoose");
const { HttpStatusCode } = require("@/utils/Enums");

/**
 * Connect to MongoDB database
 * @returns {Promise} Mongoose connection
 */
const connectDB = async () => {
  // console.log(process.env.MONGO_URI);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('\x1b[32m%s\x1b[0m', '[OK] MongoDB Connected Successfully');
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
