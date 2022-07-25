const express = require('express')

// Create express instance
const app = express()

// Require API routes
const users = require('./routes/users.routes.js')

// Import API Routes
app.use(users)

// Export express app
module.exports = app