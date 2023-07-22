import express, { type Router } from 'express';
import checkAuth from '../middlewares/checkAuth';
import { addSubscription, getSubscriptions, deleteSubscription, getUserSubscriptions, getClassSubscriptions, updateSubscription } from '../controllers/subscriptions';
import checkRole from '../middlewares/checkRole';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:classId', checkAuth, addSubscription);
SubscriptionRouter.get('/', getSubscriptions);
SubscriptionRouter.delete('/:id', deleteSubscription);
SubscriptionRouter.put('/:id', checkRole, updateSubscription);
SubscriptionRouter.get('/user', checkAuth, getUserSubscriptions);
SubscriptionRouter.get('/:classId', getClassSubscriptions);

export default SubscriptionRouter;
