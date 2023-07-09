import { NextFunction, Request, Response } from 'express';
import Product from '../../database/productSchema';
import CustomError from '../../helpers';

const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const products = await Product.find().populate('categoryId');
    res.status(200).json({ products, msg: 'Get Products Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getProducts;
