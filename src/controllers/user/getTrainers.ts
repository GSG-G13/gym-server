import { NextFunction, Request, Response } from 'express';
import User from '../../database/user';
import CustomError from '../../helpers';

const getTrainers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTrainers = await User.find({ role: 'trainer' }, { password: 0 });
    res.status(200).json({ message: 'trainer sent successfully', allTrainers });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getTrainers;
