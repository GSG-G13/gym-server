import express, { type Router } from 'express';
import announcementRouter from './announcement';
import userRouter from './userroutes';

const router: Router = express.Router();

router.use('/announcements', announcementRouter);
router.use('/users', userRouter);
export default router;
