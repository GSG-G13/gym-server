import { NextFunction, Response, Request } from 'express';
import Product from '../../database/productSchema';
import CustomError from '../../helpers';

const addProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, image, rating, price, description } = req.body;

    const { categoryId } = req.params;

    const isExistedProduct = await Product.findOne({ title });
    if (isExistedProduct) {
      throw new CustomError(400, 'Product Is Existing');
    }
    await Product.create({
      title,
      image,
      rating,
      price,
      categoryId,
      description,
    });
    res.status(201).json({ msg: 'Created Product Successfully' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default addProduct;
