import { NextFunction, type Response } from 'express';
import Subscription from '../../database/subscriptionSchema';
import CustomError from '../../helpers';
import { UserRequestI } from '../../interfaces/requestI';

const createSubscription = async (
  req: UserRequestI,
  res: Response,
  next: NextFunction,

): Promise<void> => {
  try {
    const { id } = req.user;
    const { classId } = req.params;
    const { price, status } = req.body;
    const checkedData = await Subscription.findOne({ userId: id, classId });
    if (checkedData) {
      throw new CustomError(400, 'you  have already subscribed!');
    }

    await Subscription.create({
      userId: id,
      classId,
      price,
      status,
    });
    res.status(201).json('subscription create successfully!');
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};
export default createSubscription;
