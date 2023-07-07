import { NextFunction, type Request, type Response } from 'express';
import CustomError from '../../helpers';
import User from '../../database/user';

const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedClass = await User.findByIdAndDelete({ _id: id });
    res.status(202).json({ deletedClass, msg: ' user deleted successfully!' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default deleteUser;
