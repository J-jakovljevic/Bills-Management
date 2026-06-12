# Bills Management

[![CI](https://github.com/jovanajakovljevic/Bills-Management/actions/workflows/ci.yml/badge.svg)](https://github.com/jovanajakovljevic/Bills-Management/actions/workflows/ci.yml)

This project is a React + TypeScript application with Material UI, ESLint, Prettier and Vitest configured for local development.

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Run linting and formatting checks:
   ```bash
   npm run lint
   npm run format:check
   ```
5. Run tests:
   ```bash
   npm test
   ```

## CI

This repository includes a GitHub Actions workflow that runs on every push and pull request:

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`

## Tech stack

- React
- TypeScript
- Vite
- Material UI
- ESLint + Prettier
- Vitest + Testing Library
