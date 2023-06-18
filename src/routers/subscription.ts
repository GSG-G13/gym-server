import express, { type Router } from 'express';
import checkAuth from '../middlewares/checkAuth';
import { addSubscription, getSubscriptions, updateSubscription } from '../controllers/subscriptions';
import checkRole from '../middlewares/checkRole';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:classId', checkAuth, addSubscription);
SubscriptionRouter.get('/', getSubscriptions);
SubscriptionRouter.put('/:id', checkRole, updateSubscription);

export default SubscriptionRouter;
