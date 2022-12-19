require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection Success');
  } catch (error) {
    console.log("🚀 ~ file: db.js:13 ~ connectDB ~ error", error)
    console.log('MongoDB connection fail');
    process.exit(1);
  }
};

module.exports = connectDB;
