/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response } from 'express';
import Comment from '../../database/comment.schema';
import CustomError from '../../helpers';
import { TokenRequest } from '../../middlewares/checkAuth';

const createComment = async (req: TokenRequest, res: Response, next: NextFunction) => {
  try {
    const { comment } = req.body;
    const { announcementId } = req.params;
    const { id } = req.user;

    await Comment.create({
      comment,
      announcementId,
      userId: id,
    });
    res.status(201).json({ msg: 'Created Comment successfully ' });
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default createComment;
