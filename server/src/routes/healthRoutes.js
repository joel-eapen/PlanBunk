import { Router } from "express";

import { healthController } from "../controllers/healthController.js";
import { validateHealth } from "../validators/healthValidator.js";

const router = Router();

router.get("/", validateHealth, healthController);

export default router;