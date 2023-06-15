import express, { Router } from 'express';
import classRouter from './class';
import userRouter from './userroutes';
import announcementRouter from './announcement';

const router: Router = express.Router();
router.use('/users', userRouter);
router.use('/classes', classRouter);

router.use('/announcements', announcementRouter);
router.use('/users', userRouter);
export default router;
