const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/shopease";

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`✓ MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`✗ MongoDB Connection Error: ${error.message}`);
    console.error(
      "Please ensure MongoDB is running locally (e.g. mongod) or provide a valid MONGODB_URI (e.g. MongoDB Atlas) in backend/.env"
    );
  }
};

module.exports = connectDB;

