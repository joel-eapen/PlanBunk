import cors from "cors";
import express from "express";

import { config } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";
import healthRoutes from "./routes/healthRoutes.js";
import planRoutes from "./routes/planRoutes.js";

const app = express();

app.use(cors(config.cors));
app.use(express.json());

app.use("/api/health", healthRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;