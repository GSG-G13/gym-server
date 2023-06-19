import express, { type Router } from 'express';
import createOrder from '../controllers/orders/addOrder';
import checkAuth from '../middlewares/checkAuth';

const orderRouter: Router = express.Router();
orderRouter.post('/:productId', checkAuth, createOrder);

export default orderRouter;
