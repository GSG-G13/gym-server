import { NextFunction, type Request, type Response } from 'express';
import Class from '../../database/classSchema';
import CustomError from '../../helpers';

const getClassBYId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const classObj = await Class.findById(id).populate('trainerId');
    res.status(200).json({ classObj, msg: ' Get class successfully!' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getClassBYId;
