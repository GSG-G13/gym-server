import { NextFunction, Response } from 'express';
import CustomError from '../../helpers';
import { TokenRequest } from '../../middlewares/checkAuth';
import Order from '../../database/order';
import Product from '../../database/productSchema';

const createOrder = async (req:TokenRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.user;
    const { productId } = req.params;
    const { amount } = req.query;

    const product = await Product.findOne({ _id: productId });
    const totalPrice = +amount * product.price;
    await Order.create({
      userId: id,
      productId,
      status: 'requested',
      totalPrice,
      amount,
    });
    res.status(201).json({
      msg: 'your order has been added successfully',
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default createOrder;
