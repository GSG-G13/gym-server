import { NextFunction, type Request, type Response } from 'express';
import Class from '../../database/classSchema';
import CustomError from '../../helpers';

const getClasses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const classesData = await Class.find();
    res.status(200).json({ classesData, msg: 'Get classes successfully!' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getClasses;
