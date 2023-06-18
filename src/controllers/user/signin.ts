import type { NextFunction, Request, Response } from 'express';
import { compare } from 'bcrypt';
import User from '../../database/user';
import CustomError from '../../helpers';

const signIn = async (req:Request, res:Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, { password: 0 });
    if (!user) {
      next(new CustomError(400, 'Email or password wrong!'));
    } else {
      const passwordsMatch = await compare(password, user.password);
      if (!passwordsMatch) {
        next(new CustomError(400, 'Email or password wrong!'));
      } else {
        res.cookie('token', user).status(200).json({ message: 'logged in successfully' });
      }
    }
  } catch (error) {
    next(new CustomError(400, 'Email or password wrong!'));
  }
};

export default signIn;
