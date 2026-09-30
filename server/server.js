import "dotenv/config";

import app from "./src/app.js";
import { config } from "./src/config/env.js";

const server = app.listen(config.port, () => {
  console.log(`API listening on http://localhost:${config.port}`);
});

const shutdown = async (signal) => {
  console.log(`${signal} received. Shutting down gracefully.`);
  server.close(() => process.exit(0));
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));