import { NextFunction, Response } from 'express';
import { TokenRequest } from '../../middlewares/checkAuth';
import CustomError from '../../helpers';
import Review from '../../database/reviews';

const deleteReview = async (req: TokenRequest, res: Response, next: NextFunction):Promise<void> => {
  try {
    console.log(req.body, req.user);
    const { id } = req.user;
    const { productID } = req.body;
    await Review.deleteOne({
      userID: id,
      productID,
    });
    res.status(200).json({ Massage: 'Review deleted successfully' });
  } catch (error) {
    next(new CustomError(500, error.massage));
  }
};

export default deleteReview;
