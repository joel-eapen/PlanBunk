import "dotenv/config";

const port = Number(process.env.PORT) || 3000;

export const config = {
  port,
  databaseUrl: process.env.DATABASE_URL,
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },
};