import express, { type Router } from 'express';
import checkAuth from '../middlewares/checkAuth';

import addSubscription from '../controllers/subscriptions';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:classId', checkAuth, addSubscription);

export default SubscriptionRouter;
