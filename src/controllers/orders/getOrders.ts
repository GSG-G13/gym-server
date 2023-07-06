import { NextFunction, Request, Response } from 'express';
import Order from '../../database/order';
import CustomError from '../../helpers';

const getOrders = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const orders = await Order.find().populate('productId').populate('userId');
    if (orders.length === 0) {
      throw new CustomError(400, 'there is no data');
    }
    res.status(200).json({
      orders,
      msg: 'get orders successfully',
    });
  } catch (error) {
    console.log(error);

    next(new CustomError(500, error.message));
  }
};

export default getOrders;
