import type { NextFunction, Request, Response } from 'express';
import CustomError from '../../helpers';

const signOut = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.clearCookie('token').json({ message: 'cookie removed successfully' }).status(200);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default signOut;
