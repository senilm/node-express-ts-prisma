import { Router } from "express";
import { getUser } from "../controllers/user.controller.js";
import { controllerHandler } from "../utils/controllerHandler.js";

const router = Router();

router.get('/:id', controllerHandler(getUser));

export default router;