import type { Request, Response } from 'express';
import { hash } from 'bcrypt';
import User from '../../database/user';
// import hashPassword from '../../helpers/hashPromises';

const signupController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, weight, height, gender, goalWeight, role } = req.body;
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
    console.log(hashedPassword);
    res.status(201).json({ massage: 'user created successfully' });
  } catch (error) {
    console.log(error, 'err');
  }
};

export default signupController;
