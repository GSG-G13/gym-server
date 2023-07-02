import { NextFunction, type Request, type Response } from 'express';
import Subscription from '../../database/subscriptionSchema';
import CustomError from '../../helpers';

const getClassSubscriptions = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { classId } = req.params;
    const classSubscriptionData = await Subscription.find({ classId }).populate('classId').populate('userId');
    res.status(200).json({ classSubscriptionData, msg: 'Get class subscriptions successfully!' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default getClassSubscriptions;
