import { NextFunction, Request, Response } from 'express';
import Category from '../../database/category.schema';
import CustomError from '../../helpers';

const deleteCategory = async (req:Request, res:Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.deleteOne({ _id: id });
    res.status(202).json({ deletedCategory, msg: 'Deleted Category Successfully' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default deleteCategory;
