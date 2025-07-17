const express = require('express')
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT || 3000

// Database configuration
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'devboard',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres'
})

// Store server start time for uptime calculation
const serverStartTime = Date.now()

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
    message: 'Hello World!',
    service: 'DevBoard Backend',
    timestamp: new Date().toISOString()
  })
})

// Healthcheck route
app.get('/healthcheck', (req, res) => {
  const uptime = (Date.now() - serverStartTime) / 1000 // Convert to seconds
  res.json({
    status: 'ok',
    uptime: uptime,
    timestamp: new Date().toISOString(),
    service: 'DevBoard Backend',
    version: '1.0.0'
  })
})

// Tasks route - fetch from database
app.get('/tasks', async (req, res) => {
  try {
    console.log(`${new Date().toISOString()} - Fetching tasks from database`)

    const result = await pool.query(
      'SELECT * FROM tasks ORDER BY created_at DESC'
    )

    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows
    })
  } catch (error) {
    console.error('Error fetching tasks:', error)

    res.status(500).json({
      success: false,
      error: 'Failed to fetch tasks',
      message: error.message
    })
  }
})

// Middleware for simple logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server listening on port ${PORT}`)
  console.log(`📍 Access it at: http://localhost:${PORT}`)

  // Test database connection
  try {
    await pool.query('SELECT NOW()')
    console.log('✅ Database connected successfully')
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
  }
})
