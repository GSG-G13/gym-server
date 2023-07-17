import { NextFunction, Request, Response } from 'express';
import Product from '../../database/productSchema';
import CustomError from '../../helpers';

const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, price, image } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { title, price, image, description },
    );
    res.status(200).json({ updatedProduct, msg: 'Update Product Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default updateProduct;
