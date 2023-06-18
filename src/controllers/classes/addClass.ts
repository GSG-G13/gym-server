import { NextFunction, type Request, type Response } from 'express';
import Class from '../../database/classSchema';
import CustomError from '../../helpers';

const addClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { className, description, trainerId, price, userCount } = req.body;
    const checkName = await Class.findOne({ className });
    if (checkName) {
      throw new CustomError(400, 'className already existed!');
    }
    await Class.create({
      className,
      description,
      trainerId,
      price,
      userCount,
    });
    res.status(201).json('class added successfully!');
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default addClass;
