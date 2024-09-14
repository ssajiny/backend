import { Router } from "express";

import { validateUnique } from "../controllers/signupController.js";

const router = Router();

router.post("/verify", validateUnique);

export default router;
