import { NextFunction, Request, Response } from 'express';
import Category from '../../database/category.schema';
import CustomError from '../../helpers';

const getCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories, msg: 'Get  Categories Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default getCategories;
