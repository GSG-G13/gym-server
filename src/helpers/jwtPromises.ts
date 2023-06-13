import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

const verifyToken = (token: string) => new Promise((resolve, reject) => {
  verify(token, SECRET_KEY, (error, decoded) => {
    if (error) {
      reject(error);
    } else {
      resolve(decoded);
    }
  });
});

export default verifyToken;
