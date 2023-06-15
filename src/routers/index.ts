import express, { type Router } from 'express';
import productRouter from './product';
import userRouter from './user';
import reviewRouter from './reviews';
import announcementRouter from './announcement';

const router: Router = express.Router();

router.use('/reviews', reviewRouter);
router.use('/announcements', announcementRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
