# NiftyByte Site

Modern marketing and services site for NiftyByte Technologies built with a Vite + React client, Express backend, and shared Zod/Drizzle schemas.

## Stack Overview

- **Client**: React 18 with Wouter routing, Tailwind CSS, Radix UI primitives, and Framer Motion (via a shared `MotionProvider`) for future animations.
- **Server**: Express 4 with a simple in-memory storage layer (`server/storage.ts`) and Zod validation shared from `shared/schema.ts`.
- **Tooling**: Vite for client dev/build, tsx for server dev, TypeScript and Tailwind configured in the `client` directory.

## Getting Started

```bash
npm install
npm run dev
```

- By default the server listens on `PORT` if provided, else `3000` locally (`5000` on Replit). Visit `http://localhost:3000` once `serving on port ...` appears in the console.
- API routes are namespaced under `/api` (e.g. `POST /api/contact`).

## Scripts

- `npm run dev` – start Express + Vite in development mode.
- `npm run build` – build client assets and bundle the server for production deployment.
- `npm run start` – serve the production build from `dist`.
- `npm run check` – run the TypeScript compiler for type-checking.

## Project Structure

- `client/` – React application source.
- `server/` – Express entrypoint, routes, storage, and Vite integration.
- `shared/` – Drizzle schema definitions shared by client/server.
- `docs/` – Project documentation (see below).

## Documentation

- `docs/animation-notes.md` – quick reference for using the shared Framer Motion provider.

Add new documentation in `docs/` as features evolve.

## GitHub Remote

After logging in with Git and creating the repository, connect it locally:

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

Replace `<your-github-repo-url>` with the HTTPS or SSH URL for the new repository.
