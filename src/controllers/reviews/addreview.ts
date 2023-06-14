import { NextFunction, Response } from 'express';
import Review from '../../database/reviews';
import CustomError from '../../helpers';
import { TokenRequest } from '../../middlewares/checkAuth';
import UserData from '../../interfaces/userDataI';

const addReview = async (req: TokenRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.user as UserData;
    const { productID, rating } = req.body;
    await Review.create({
      userID: id,
      productID,
      rating,
    });
    res.json({ massage: 'review sent' }).status(201);
  } catch (error) {
    next(new CustomError(500, 'could not add a review'));
  }
};

export default addReview;
