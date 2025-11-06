const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db'); // MongoDB connection file
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

// Import route files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use routes
app.use('/person', personRoutes);
app.use('/menuItem', menuRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('✅ Hotel API is running successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
