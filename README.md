# Ken Isaac Portfolio

Production-grade personal portfolio for **Ken Isaac**, Lead SDET / QA Automation Architect. The monorepo includes a React/Vite frontend and a NestJS/PostgreSQL backend with Prisma, Redis-ready infrastructure, Swagger, seed data, and tests.

## Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion, TanStack Query, React Router, i18next, Zod, React Hook Form
- Backend: NestJS, Prisma, PostgreSQL, Redis module, optional NATS event bus adapter, Swagger/OpenAPI, Jest, Supertest

## Quick Start

```bash
cp .env.example .env
npm install
docker compose up -d postgres redis nats
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:4000`

Swagger: `http://localhost:4000/docs`

## Useful Scripts

```bash
npm run dev:frontend
npm run dev:backend
npm run build
npm run test
npm run prisma:migrate
npm run seed
```

## Project Layout

```txt
frontend/   React portfolio application
backend/    NestJS API, Prisma schema, seed, tests
```

## Notes

- The portfolio can render from local frontend content while the backend is offline.
- Contact submissions post to `POST /contact/messages`.
- Seed data mirrors the resume content in the portfolio prompt.
