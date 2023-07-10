import { NextFunction, Request, Response } from 'express';
import { hash } from 'bcrypt';
import User from '../../database/user';
import CustomError from '../../helpers';

const ChangePassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { password, email } = req.body;
    const hashedPassword = await hash(password, 10);

    await User.updateOne({ email }, {
      password: hashedPassword,
    });
    res.status(200).json({ message: 'Your password has been updated' });
  } catch (error) {
    next(new CustomError(500, 'Server error '));
  }
};

export default ChangePassword;
