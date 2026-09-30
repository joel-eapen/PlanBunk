import cors from "cors";
import express from "express";
import morgan from "morgan";

import { config } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";
import healthRoutes from "./routes/healthRoutes.js";

const app = express();

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(cors(config.cors));
app.use(express.json());

app.use("/api/health", healthRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;