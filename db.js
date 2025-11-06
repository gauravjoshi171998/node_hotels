const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGODB_URL;

// ✅ Just pass the URL — no need for deprecated options
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => console.log('✅ MongoDB connected'));
db.on('error', (err) => console.error('❌ MongoDB connection error:', err));
db.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'));

module.exports = db;
