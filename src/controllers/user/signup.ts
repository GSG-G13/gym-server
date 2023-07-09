import type { NextFunction, Request, Response } from 'express';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import User from '../../database/user';
import CustomError from '../../helpers';
import { SECRET_KEY } from '../../config';

const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, email, password, age, gender, height, weight, goalweight, role = 'user' } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      // next(new CustomError(400, 'Email already exist'));
      throw new CustomError(400, 'Email already exist');
    } else {
      const hashedPassword = await hash(password, 10);
      const userData = await User.create({
        username,
        email,
        password: hashedPassword,
        age,
        weight,
        height,
        gender,
        goalweight,
        role,
      });

      const token = sign({
        username: userData.username,
        id: userData._id,
        role: userData.role,
      }, SECRET_KEY);
      res.cookie('token', token).status(201).json({ massage: 'user created successfully' });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(500, error.message));
  }
};

export default signup;
