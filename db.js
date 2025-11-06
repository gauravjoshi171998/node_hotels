const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGODB_URL;

// ✅ Just pass the URL — no need for deprecated options
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('✅ Connected to MongoDB Server');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

module.exports = db;
