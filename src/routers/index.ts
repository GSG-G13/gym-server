import express, { Router } from 'express';
import classRouter from './class';

const router: Router = express.Router();

router.use('/classes', classRouter);

export default router;
