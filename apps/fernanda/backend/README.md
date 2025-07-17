# DevBoard Backend

Backend in Node.js with Express for the DevBoard project.

## How to Run

```bash
# Install dependencies
npm install
# Run in development mode
npm run dev
# Run in production mode
npm start
```

## Endpoints

- `GET /` - Hello World
- `GET /healthcheck` - Returns uptime, status, and service info
- `GET /tasks` - Fetches tasks from the PostgreSQL database

## Port

By default, it runs on port 3000. You can change it via the `PORT` environment variable.
