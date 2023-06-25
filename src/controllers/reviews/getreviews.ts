import { NextFunction, Request, Response } from 'express';
import Review from '../../database/reviews';
import CustomError from '../../helpers';

const getReviews = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const productId = req.params.id;
    const productReviews = await Review.find({ productId }).populate('productId').populate('userId');
    res.status(200).json({ massage: 'product sent successfully', productReviews });
  } catch (error) {
    next(new CustomError(500, 'Could not get reviews'));
  }
};

export default getReviews;
