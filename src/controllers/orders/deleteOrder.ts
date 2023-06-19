import { NextFunction, Response } from 'express';
import Order from '../../database/order';
import CustomError from '../../helpers';
import { TokenRequest } from '../../middlewares/checkAuth';

const deleteOrder = async (req:TokenRequest, res: Response, next:NextFunction): Promise<void> => {
  try {
    const { id } = req.user;
    const { orderId } = req.params;
    const orders = await Order.deleteOne({ _id: orderId, userId: id });
    res.status(202).json({
      orders,
      msg: 'delete order successfully',
    });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default deleteOrder;
