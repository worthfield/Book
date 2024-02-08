import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";
const router = Router();
router.route('/api/auth/signup').post(signUp)
export default router