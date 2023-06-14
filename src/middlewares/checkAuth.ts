import { type NextFunction, type Request, type Response } from 'express';
import CustomError from '../helpers';
import verifyToken from '../helpers/jwtPromises';
import userInfo from '../interfaces/userDataI';

export interface TokenRequest extends Request {
  user?: userInfo
}

const checkAuth = async (req: TokenRequest, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    next(new CustomError(401, 'Not Autherized'));
  }

  const userData = await verifyToken(token);
  req.user = userData as userInfo;
  next();
};

export default checkAuth;
