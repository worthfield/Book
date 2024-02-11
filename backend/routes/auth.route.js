import { Router } from "express";
import { signUp, signin } from "../controllers/auth.controller.js";
const router = Router();
router.route('/api/auth/signup').post(signUp)
router.route('/api/auth/signin').post(signin)
export default router