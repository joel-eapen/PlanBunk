# PlanBunk
A bunk planning tool for bunking your classes without getting detained

## Backend setup

The backend is a JavaScript Express API using PostgreSQL through Prisma.

```bash
cd server
npm install
npm run db:generate
npm run dev
```

Set `DATABASE_URL` in `server/.env` before running migrations. The default value
targets a local PostgreSQL database named `planbunk`.

```bash
npm run db:migrate -- --name init
```

The health check is available at `http://localhost:3000/api/health`.
