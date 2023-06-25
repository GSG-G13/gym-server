import { NextFunction, Request, Response } from 'express';
import Product from '../../database/productSchema';
import CustomError from '../../helpers';

const getProductById = async (req: Request, res: Response, next:NextFunction) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate('categoryId');
    res.status(200).json({ product, msg: 'Get Product Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getProductById;
