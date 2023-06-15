/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextFunction, type Request, type Response } from 'express';
import Product from '../../database/productSchema';
import CustomError from '../../helpers';

const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.deleteOne({ _id: id });
    res.status(202).json({ deletedProduct, msg: 'Deleted Product Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default deleteProduct;
