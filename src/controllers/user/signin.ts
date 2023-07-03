import type { NextFunction, Request, Response } from 'express';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import User from '../../database/user';
import CustomError from '../../helpers';
import { SECRET_KEY } from '../../config';

const signIn = async (req:Request, res:Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }, { password: 1 });

    if (!user) {
      next(new CustomError(400, 'Email or password wrong!'));
    } else {
      const passwordsMatch = await compare(password, user.password);
      if (!passwordsMatch) {
        next(new CustomError(400, 'Email or password wrong!'));
      } else {
        const userData = await User.findOne({ email }, { password: 0 });
        const token = sign(
          { username: userData.username,
            email: userData.email,
            id: userData._id,
            role: userData.role,
          },
          SECRET_KEY,
        );
        res.cookie('token', token).status(200).json({ userData, message: 'logged in successfully' });
      }
    }
  } catch (error) {
    next(new CustomError(400, 'Email or password wrong!'));
  }
};

export default signIn;
