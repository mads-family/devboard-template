CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  done BOOLEAN DEFAULT false
);

INSERT INTO tasks (title, done) VALUES
('Aprender Docker', false),
('Criar rota /tasks', true);
