const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/shopease";

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✓ MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`✗ MongoDB Connection Error: ${error.message}`);
    console.error(
      "------------------------------------------------------------------"
    );
    console.error(
      "NOTICE: Your backend could not connect to MongoDB."
    );
    console.error(
      "If you don't have local MongoDB installed, use MongoDB Atlas (Cloud):"
    );
    console.error(
      "1. Go to https://www.mongodb.com/cloud/atlas and create a free database"
    );
    console.error(
      "2. Copy your connection string into backend/.env (MONGODB_URI)"
    );
    console.error(
      "------------------------------------------------------------------"
    );
  }
};

module.exports = connectDB;
