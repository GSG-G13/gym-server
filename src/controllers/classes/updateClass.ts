import { NextFunction, type Request, type Response } from 'express';
import Class from '../../database/classSchema';
import CustomError from '../../helpers';

const updateClass = async (req: Request, res:Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { className,
      description,
      trainerId,
      price,
      userCount } = req.body;

    const updatedData = await Class.findByIdAndUpdate(
      id,
      { className, description, trainerId, price, userCount },
    );
    res.status(200).json({ updatedData, msg: 'class updated successfully!' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};
export default updateClass;
