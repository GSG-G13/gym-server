import express, { type Router } from 'express';

import addSubscription from '../controllers/subscriptions';

const SubscriptionRouter: Router = express.Router();

SubscriptionRouter.post('/:userId', addSubscription);

export default SubscriptionRouter;
