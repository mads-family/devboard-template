const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = 'https://jsonplaceholder.typicode.com';

app.use(express.json()); // Habilita JSON no corpo das requisições

// GET /posts - Lista todos os posts
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar posts' });
  }
});

// GET /posts/:id - Busca um post por ID
app.get('/posts/:id', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar post' });
  }
});

// GET /posts/:id/comments - Busca comentários de um post
app.get('/posts/:id/comments', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${req.params.id}/comments`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar comentários do post' });
  }
});

// GET /comments?postId=1 - Busca comentários por query
app.get('/comments', async (req, res) => {
  try {
    const { postId } = req.query;
    const response = await axios.get(`${BASE_URL}/comments`, {
      params: { postId }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
});

// POST /posts - Cria um novo post
app.post('/posts', async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, req.body);
    res.status(201).json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar post' });
  }
});

// PUT /posts/:id - Substitui um post
app.put('/posts/:id', async (req, res) => {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao subtituir post' });
  }
});

// PATCH /posts/:id - Atualiza um post
app.patch('/posts/:id', async (req, res) => {
  try {
    const response = await axios.patch(`${BASE_URL}/posts/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar o post' });
  }
});

// DELETE /posts/:id - Remove um post
app.delete('/posts/:id', async (req, res) => {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${req.params.id}`);
    res.json({ message: 'Post deletado (simulado)', status: response.status });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar post' });
  }
});

// Healthcheck
app.get('/healthcheck', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
