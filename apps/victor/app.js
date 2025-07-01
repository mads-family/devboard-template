require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Middleware de log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} acessado`);
  next();
});

app.get('/healthcheck', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime().toFixed(2) + 's'
  });
});

app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar tasks:', error);
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
