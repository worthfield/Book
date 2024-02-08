import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();
const app = express();
app.use(express.json())
app.use(userRouter)
app.use(authRouter)
export default app;