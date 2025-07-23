-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO tasks (title, description, status) VALUES
('Setup Docker Environment', 'Configure docker-compose with PostgreSQL, backend and frontend', 'completed'),
('Create API Endpoints', 'Implement /tasks and /healthcheck routes', 'pending'),
('Build Frontend UI', 'Create React components to display tasks', 'pending');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample user
INSERT INTO users (username, email) VALUES
('fernanda', 'fernanda@devboard.com');
