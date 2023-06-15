import express, { type Router } from 'express';
import productRouter from './product';
import userRouter from './userroutes';
import announcementRouter from './announcement';

const router: Router = express.Router();

router.use('/announcements', announcementRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
