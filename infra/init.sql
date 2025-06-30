CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  assignee TEXT,
  status TEXT CHECK (status IN ('todo', 'doing', 'done')) NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

INSERT INTO tasks (title, description, assignee, status, created_at) VALUES
  ('Criar Dockerfile', 'Gerar a imagem da sua API com Docker', 'Fernanda', 'todo', '2024-10-01T10:00:00Z'),
  ('Rodar banco com docker-compose', 'Subir o PostgreSQL com volume nomeado', 'Victor', 'doing', '2024-10-01T11:00:00Z'),
  ('Testar endpoint /healthcheck', 'Usar curl ou Postman para validar', 'Venicio', 'done', '2024-10-01T12:00:00Z');
