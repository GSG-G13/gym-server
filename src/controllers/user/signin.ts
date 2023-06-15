import type { Request, Response } from 'express';
import User from '../../database/user';

const signIn = async (req:Request, res:Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user?.password === password) {
      res.status(200).json({
        user,
        msg: 'logged',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default signIn;
