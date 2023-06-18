import express, { type Router } from 'express';
import checkAuth from '../middlewares/checkAuth';
import { addSubscription, getSubscriptions } from '../controllers/subscriptions';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:classId', checkAuth, addSubscription);
SubscriptionRouter.get('/', getSubscriptions);

export default SubscriptionRouter;
console.log(subscription);
