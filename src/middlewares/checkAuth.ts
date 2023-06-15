import { type NextFunction, type Request, type Response } from 'express';
import CustomError from '../helpers';
import verifyToken from '../helpers/jwtPromises';
import userInfo from '../interfaces/userDataI';

export interface TokenRequest extends Request {
  user?: userInfo
}

const checkAuth = async (req: TokenRequest, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new CustomError(401, 'Not Authorized');
    }
    const userData = await verifyToken(token);
    req.user = userData as userInfo;
    next();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.name === 'JsonWebTokenError') next(new CustomError(401, 'Error'));
    next(err);
  }
};
export default checkAuth;
