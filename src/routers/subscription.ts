import express, { type Router } from 'express';
import checkAuth from '../middlewares/checkAuth';
import { addSubscription, getSubscriptions, getUserSubscriptions } from '../controllers/subscriptions';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:classId', checkAuth, addSubscription);
SubscriptionRouter.get('/', getSubscriptions);
SubscriptionRouter.get('/user', getUserSubscriptions);

export default SubscriptionRouter;
