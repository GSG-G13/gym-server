import express, { type Router } from 'express';
import checkAuth from '../middlewares/checkAuth';
import { addSubscription, getSubscriptions, deleteSubscription } from '../controllers/subscriptions';
import checkRole from '../middlewares/checkRole';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:classId', checkAuth, addSubscription);
SubscriptionRouter.get('/', getSubscriptions);
SubscriptionRouter.delete('/:id', checkRole, deleteSubscription);

export default SubscriptionRouter;
