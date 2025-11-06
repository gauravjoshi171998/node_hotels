const mongoose = require('mongoose');

// MongoDB Connection
const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB Server')
})

db.on('error', () => {
    console.log('MongoDB connection error')
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected ')
})


module.exports = db;