import express, { type Router } from 'express';
import productRouter from './product';
import userRouter from './userroutes';

const router: Router = express.Router();
router.use('/users', userRouter);

router.use('/products', productRouter);

export default router;
