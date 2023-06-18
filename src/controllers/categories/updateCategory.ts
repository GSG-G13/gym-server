import { NextFunction, Request, Response } from 'express';
import Category from '../../database/category.schema';
import CustomError from '../../helpers';

const updateCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { categoryName, categoryImage } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, { categoryName, categoryImage });
    res.status(200).json({ updatedCategory, msg: 'Updated Category Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};
export default updateCategory;
