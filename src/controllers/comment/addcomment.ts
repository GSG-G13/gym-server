import { Response, NextFunction } from 'express';
import Comment from '../../database/comment';
import CustomError from '../../helpers';
import { TokenRequest } from '../../middlewares/checkAuth';

const addComment = async (req: TokenRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { commentBody, announcement } = req.body;
    const { id } = req.user;
    console.log('dddd', commentBody, announcement, id);
    await Comment.create({
      commentBody,
      user: id,
      announcement,
    });
    res.status(201).json({ massage: 'Comment created successfully' });
  } catch (error) {
    console.log(error.message);
    next(new CustomError(500, error.message));
  }
};

export default addComment;
