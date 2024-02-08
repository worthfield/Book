import { Router } from "express";
import  {user}  from "../controllers/user.controller.js";
const router = Router();
router.route('/api/user').get(user)
export default router;