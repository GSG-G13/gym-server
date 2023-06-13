import { type NextFunction, type Request, type Response } from 'express';
import { CustomError } from '../helpers';
import verifyToken from '../helpers/jwtPromises';

interface userInto {
  id: string, role: string
}

interface TokenRequest extends Request {
  user?: userInto
}

const checkAuth = async (req: TokenRequest, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    next(new CustomError(401, 'Not Autherized'));
  }

  const userData = await verifyToken(token);
  req.user = userData as userInto;
  next();
};

export default checkAuth;
