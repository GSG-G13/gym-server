/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextFunction, Response } from 'express';
import CustomError from '../../helpers';
import User from '../../database/user';
import { UserRequestI } from '../../interfaces/requestI';

const deleteUserInfo = async (
  req: UserRequestI,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.user;

    const deletedUserInfo = await User.findByIdAndDelete({ _id: id });
    res.clearCookie('token').status(202).json({ deletedUserInfo,
      message: 'cookie Deleted successfully' });
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default deleteUserInfo;
