import type { Request, Response } from 'express';
import User from '../../database/user';

const signupController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, wieght, hieght, gender, goalWieght, role } = req.body;
    await User.create({
      username,
      email,
      password,
      wieght,
      hieght,
      gender,
      goalWieght,
      role,
    });
    res.status(201).json({ massage: 'user created successfully' });
  } catch (error) {
    console.log(error);
  }
};

export default signupController;
