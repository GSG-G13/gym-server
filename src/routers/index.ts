import express, { Router } from 'express';
import classRouter from './class';
import productRouter from './product';
import userRouter from './user';
import reviewRouter from './reviews';
import announcementRouter from './announcement';
import orderRouter from './order';
import SubscriptionRouter from './subscription';
import categoryRouter from './category';
import chatRouter from './chat';
import commentRouter from './comment';
import calendarRouter from './calendar';

const router: Router = express.Router();
router.use('/users', userRouter);
router.use('/classes', classRouter);
router.use('/announcements', announcementRouter);
router.use('/reviews', reviewRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/subscriptions', SubscriptionRouter);
router.use('/categories', categoryRouter);
router.use('/chat', chatRouter);
router.use('/comments', commentRouter);
router.use('/calendar', calendarRouter);

export default router;
