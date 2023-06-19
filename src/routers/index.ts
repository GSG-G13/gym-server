import express, { Router } from 'express';
import classRouter from './class';
import productRouter from './product';
import userRouter from './user';
import reviewRouter from './reviews';
import announcementRouter from './announcement';
import orderRouter from './order';

const router: Router = express.Router();
router.use('/users', userRouter);
router.use('/classes', classRouter);
router.use('/announcements', announcementRouter);
router.use('/reviews', reviewRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;
