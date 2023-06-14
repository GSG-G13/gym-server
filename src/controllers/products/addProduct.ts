import { Response, Request } from 'express';
import { Product } from '../../database/productSchema';

const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, image, rating, price } = req.body;
    const isExistedProduct = await Product.findOne({ title });
    if (isExistedProduct) {
      res.status(400).json({ msg: 'Product Is Existing'});
    }
    await Product.create({
      title,
      image,
      rating,
      price,
    });
    res.status(201).json({ msg: 'Created Product Successfully' });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default addProduct;
