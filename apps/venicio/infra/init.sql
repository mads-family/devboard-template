CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    done BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (description, done) VALUES
('First task from SQL seed', false),
('Another task preloaded', true);
