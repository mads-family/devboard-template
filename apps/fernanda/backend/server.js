const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Middleware for parsing JSON
app.use(express.json())

// Basic "Hello World" route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

// Middleware for simple logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  console.log(`Access it at: http://localhost:${PORT}`)
})
