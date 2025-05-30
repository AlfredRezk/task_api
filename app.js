// Import/require express.Js and other packages
const express = require('express')

require('dotenv').config()
require('colors')

// instantiate express
const app = express()

// store enviroment variables in a variable
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || 'http://localhost'
const MODE = process.env.MODE || 'production'

// Middlewares
app.use(express.json())
// app.use(require('./middleware/logger'))

if (MODE === 'development') app.use(require('morgan')('dev'))
else {
  app.use(require('./middleware/logger'))
  app.use(require('morgan')('combined'))
}

// Application routes
app.use('/api', require('./routes/tasks.routes'))

// Error handling middleware
app.use(require('./middleware/errorHandler'))
// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT} in ${MODE} mode`.bgGreen)
})
