import express, { type Router } from 'express';
import userRouter from './userroutes';

const router: Router = express.Router();
router.use('/users', userRouter);

export default router;
