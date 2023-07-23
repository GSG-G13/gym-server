import express, { type Router } from 'express';
import createOrder from '../controllers/orders/createOrder';
import checkAuth from '../middlewares/checkAuth';
import getOrders from '../controllers/orders/getOrders';
import checkRole from '../middlewares/checkRole';
import getUserOrders from '../controllers/orders/getUserOrders';
import deleteOrder from '../controllers/orders/deleteOrder';
import updateOrder from '../controllers/orders/updateOrder';

const orderRouter: Router = express.Router();
orderRouter.post('/:productId', checkAuth, createOrder);
orderRouter.get('/', checkRole, getOrders);
orderRouter.get('/user', checkAuth, getUserOrders);
orderRouter.delete('/:orderId', checkAuth, deleteOrder);
orderRouter.put('/:id', checkAuth, updateOrder);

export default orderRouter;
