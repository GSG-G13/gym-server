import { NextFunction, type Response } from 'express';
import Subscription from '../../database/subscriptionSchema';
import CustomError from '../../helpers';
import { UserRequestI } from '../../interfaces/requestI';

const getUserSubscriptions = async (
  req: UserRequestI,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.user;
    const userSubscriptionData = await Subscription.find({ userId: id }).populate('classId').populate('userId');
    res.status(200).json({ userSubscriptionData, msg: 'Get user subscription successfully!' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default getUserSubscriptions;
