import { NextFunction, type Request, type Response } from 'express';
import CustomError from '../../helpers';
import Order from '../../database/order';

const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate({ _id: id }, { status: 'paid' });
    res.status(200).json({ updatedOrder, msg: 'Updated Order Successfully!' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default updateOrder;
