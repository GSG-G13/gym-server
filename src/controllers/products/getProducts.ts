import { Request, Response } from 'express';
import Product from '../../database/productSchema';

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json({ products, msg: 'Get Products Successfully' });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default getProducts;
