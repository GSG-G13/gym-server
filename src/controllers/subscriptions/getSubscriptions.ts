import { NextFunction, type Request, type Response } from 'express';
import Subscription from '../../database/subscriptionSchema';
import CustomError from '../../helpers';

const getSubscriptions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const subscriptionsData = await Subscription.find().populate('classId').populate('userId');

    if (subscriptionsData.length === 0) {
      throw new CustomError(400, 'there is no data');
    }
    res.status(200).json({ subscriptionsData, msg: 'Get subscriptions Successfully!' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default getSubscriptions;
