import { NextFunction, Response } from 'express';
import CustomError from '../helpers';
import verifyToken from '../helpers/jwtPromises';
import userInfo from '../interfaces/userDataI';
import { TokenRequest } from './checkAuth';

export interface roleRequest extends TokenRequest {
  admin?: userInfo
}

const checkRole = async (req: roleRequest, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new CustomError(401, 'Not Authorized');
    }
    const userData = await verifyToken(token);
    req.admin = userData as userInfo;
    const { role } = req.admin;

    if (role !== 'admin') {
      throw new CustomError(401, 'Not Authorized');
    }
    next();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.name === 'JsonWebTokenError') next(new CustomError(401, 'Error'));
    next(err);
  }
};

export default checkRole;
