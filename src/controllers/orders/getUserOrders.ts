import { NextFunction, Response } from 'express';
import Order from '../../database/order';
import { TokenRequest } from '../../middlewares/checkAuth';
import CustomError from '../../helpers';

const getUserOrders = async (
  req:TokenRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.user;
    const orders = await Order.find({ userId: id }).populate('productId').populate('userId');
    res.status(201).json({
      orders,
      msg: 'get user orders successfully',
    });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getUserOrders;
