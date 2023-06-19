import { NextFunction, Request, Response } from 'express';
import Product from '../../database/productSchema';
import CustomError from '../../helpers';

const getProductByCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.query;
    const productByCategory = await Product.find({ category });
    res.status(200).json({ productByCategory, msg: 'Get Product By Category Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getProductByCategory;
