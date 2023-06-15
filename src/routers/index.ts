import express, { Router } from 'express';
import classRouter from './class';
import userRouter from './userroutes';

const router: Router = express.Router();
router.use('/users', userRouter);
router.use('/classes', classRouter);

export default router;
