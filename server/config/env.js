require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
};