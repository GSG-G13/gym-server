import { NextFunction, Request, Response } from 'express';
import User from '../../database/user';
import CustomError from '../../helpers';

const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const allUsers = await User.find();

    res.status(200).json({ message: 'user sent successfully', allUsers });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getAllUsers;
