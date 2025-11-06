const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // req.body

// Import the routes files
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/person', personRoutes)
app.use('/menuItem', menuRoutes)

app.listen(5000, () => {
  console.log(`Server listening on port ${5000}`)
})