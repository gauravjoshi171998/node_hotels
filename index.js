const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // req.body

const PORT = process.env.PORT || 3000

// Import the routes files
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/person', personRoutes)
app.use('/menuItem', menuRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})