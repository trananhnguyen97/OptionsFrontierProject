# Options Frontier Project

## Getting Started
1. Install Docker Desktop
2. In project root directory run
`docker-compose up --build -d`

## Components
### `frontend`
Angular frontend runs on port `80`

### `server`
Node.js server with Express runs on port `3000` -> `/backend` (e.g `http://localhost/backend`)

### `data_api`
Flask API with `wsgi`/`gunicorn` interface runs on port `9999` -> `/api` (e.g `http://localhost/api`)
