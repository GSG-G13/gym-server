/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import Comment from '../../database/comment.schema';
import CustomError from '../../helpers';

const deleteComment = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.deleteOne({ _id: id });
    res.status(202).json({ deletedComment, msg: 'Deleted Comment Successfully' });
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default deleteComment;
