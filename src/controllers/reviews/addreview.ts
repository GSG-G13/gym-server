import { NextFunction, Response } from 'express';
import Review from '../../database/reviews';
import CustomError from '../../helpers';
import { TokenRequest } from '../../middlewares/checkAuth';
import UserData from '../../interfaces/userDataI';

const addReview = async (req: TokenRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.user as UserData;
    const { productID, review } = req.body;
    const reviewExist = await Review.find({ userID: id, productID });
    if (!reviewExist.length) {
      await Review.create({
        userID: id,
        productID,
        review,
      });
      res.json({ massage: 'review added' }).status(201);
    } else {
      next(new CustomError(400, 'you have already reviews this product!'));
    }
  } catch (error) {
    next(new CustomError(500, 'could not add a review'));
  }
};

export default addReview;
