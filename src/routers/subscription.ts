import express, { type Router } from 'express';
import checkAuth from '../middlewares/checkAuth';
import { addSubscription, getSubscriptions, getUserSubscriptions, getClassSubscriptions, updateSubscription } from '../controllers/subscriptions';
import checkRole from '../middlewares/checkRole';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:classId', checkAuth, addSubscription);
SubscriptionRouter.get('/', getSubscriptions);
SubscriptionRouter.put('/:id', checkRole, updateSubscription);
SubscriptionRouter.get('/user', getUserSubscriptions);
SubscriptionRouter.get('/:classId', getClassSubscriptions);

export default SubscriptionRouter;
