import { NextFunction, Request, Response } from 'express';
import CustomError from '../../helpers';
import Comment from '../../database/comment.schema';

const getComments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const comments = await Comment.find().populate('userId').populate('announcementId');
    res.status(200).json({ comments, msg: 'Get Comments Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getComments;
