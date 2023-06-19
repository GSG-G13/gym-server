import express, { type Router } from 'express';
import createOrder from '../controllers/orders/createOrder';
import checkAuth from '../middlewares/checkAuth';
import getOrders from '../controllers/orders/getOrders';
import checkRole from '../middlewares/checkRole';

const orderRouter: Router = express.Router();
orderRouter.post('/:productId', checkAuth, createOrder);
orderRouter.get('/', checkRole, getOrders);

export default orderRouter;
