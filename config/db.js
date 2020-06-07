const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
