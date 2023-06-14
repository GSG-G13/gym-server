import type { NextFunction, Request, Response } from 'express';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import User from '../../database/user';
import CustomError from '../../helpers';
import { SECRET_KEY } from '../../config';

const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, email, password, weight, height, gender, goalWeight, role } = req.body;
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      next(new CustomError(400, 'Email already exist'));
    } else {
      const hashedPassword = await hash(password, 10);
      await User.create({
        username,
        email,
        password: hashedPassword,
        weight,
        height,
        gender,
        goalWeight,
        role,
      });
      const userID = User.findOne({ email });
      const token = await sign({
        userID,
        username,
        email,
        role,
      }, SECRET_KEY);
      res.cookie('userinfo', token).status(201).json({ massage: 'user created successfully' });
    }
  } catch (error) {
    next(new CustomError(500, 'server error'));
  }
};

export default signup;
