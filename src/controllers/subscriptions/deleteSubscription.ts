import { NextFunction, type Request, type Response } from 'express';
import Subscription from '../../database/subscriptionSchema';
import CustomError from '../../helpers';

const deleteSubscription = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleteSubData = await Subscription.findByIdAndDelete({ _id: id });
    res.status(200).json({ deleteSubData, msg: 'Deleted successfully!' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default deleteSubscription;
