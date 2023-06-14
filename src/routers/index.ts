import express, { type Router } from 'express';
import announcementRouter from './announcement';

const router: Router = express.Router();

router.use('/announcements', announcementRouter);

export default router;
