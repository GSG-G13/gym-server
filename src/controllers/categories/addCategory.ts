import { NextFunction, Request, Response } from 'express';
import Category from '../../database/category.schema';
import CustomError from '../../helpers';

const addCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { categoryName, categoryImage } = req.body;
    const isExistedCategory = await Category.findOne({ categoryName });
    if (isExistedCategory) {
      throw new CustomError(400, 'This category is already existed');
    }
    await Category.create({
      categoryName,
      categoryImage,
    });
    res.status(200).json({ msg: 'Created Category Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default addCategory;
