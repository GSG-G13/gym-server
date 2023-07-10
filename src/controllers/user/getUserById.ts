import { NextFunction, Request, Response } from 'express';
import CustomError from '../../helpers';
import User from '../../database/user';

const getUserById = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ user, msg: 'Get user Successfully' });
  } catch (error) {
    console.log(error);
    
    next(new CustomError(500, error.message));
  }
};

export default getUserById;
