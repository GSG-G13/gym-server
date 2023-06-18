import { NextFunction, type Request, type Response } from 'express';
import Class from '../../database/classSchema';
import CustomError from '../../helpers';

const deleteClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedClass = await Class.findByIdAndDelete({ _id: id });
    res.status(202).json({ deletedClass, msg: ' class deleted successfully!' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default deleteClass;
