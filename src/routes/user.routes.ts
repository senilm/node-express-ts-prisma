import { Router } from "express";
import { getAllUser } from "../controllers/user.controller.js";

const router = Router();

router.get('/', getAllUser);

export default router;