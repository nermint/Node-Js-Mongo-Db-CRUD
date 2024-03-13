const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      dbName,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
