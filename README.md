# node-service-starter

Modern Express starter powered by [Vite](https://vitejs.dev/) with sensible defaults:

- Express 4 with JSON and URL encoded body parsing enabled by default
- Vite for lightning fast development (`vite-node`) and SSR-friendly builds
- ESLint (Google config) for consistent code quality
- Morgan for HTTP request logging and CORS enabled out of the box
- Dotenv for environment variable management

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server with auto-reload
   ```bash
   npm run dev
   ```
3. Build and run the production bundle
   ```bash
   npm run build
   npm start
   ```

The service listens on `PORT` (defaults to `3000`). Health information is available at `/health`.
