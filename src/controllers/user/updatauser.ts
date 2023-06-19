import { NextFunction, Response } from 'express';
import User from '../../database/user';
import { TokenRequest } from '../../middlewares/checkAuth';
import CustomError from '../../helpers';

const updateUser = async (req: TokenRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, email, weight, height, gender, goalweight } = req.body;
    const { id } = req.user;
    await User.updateOne({ _id: id }, {
      username,
      email,
      weight,
      height,
      gender,
      goalweight,
    });
    res.status(200).json({ message: 'User information has been updated' });
  } catch (error) {
    next(new CustomError(500, 'Server error '));
  }
};

export default updateUser;