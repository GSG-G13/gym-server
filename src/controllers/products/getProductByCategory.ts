import { Request, Response } from 'express';
import Product from '../../database/productSchema';

const getProductByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const productByCategory = await Product.find({ category });
    res.status(200).json({ productByCategory, msg: 'Get Product Category Successfully' });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default getProductByCategory;
