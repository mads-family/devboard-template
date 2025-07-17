const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Middleware for CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

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
