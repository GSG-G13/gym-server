import { NextFunction, type Request, type Response } from 'express';
import Class from '../../database/classSchema';
import CustomError from '../../helpers';

const addClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { className, description, trainerId, price, limit, userCount } = req.body;
    const checkName = await Class.findOne({ className });
    if (checkName) {
      throw new CustomError(400, 'className already existed!');
    }
    await Class.create({
      className,
      description,
      trainerId,
      price,
      limit,
      userCount,
    });
    res.status(201).json('class added successfully!');
  } catch (error) {
    next(new CustomError(400, error.message));
  }
};

export default addClass;
