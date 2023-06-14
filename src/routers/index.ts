import express, { type Router } from 'express';
import userRouter from './user';
import reviewRouter from './reviews';

const router: Router = express.Router();
router.use('/users', userRouter);
router.use('/reviews', reviewRouter);

export default router;
