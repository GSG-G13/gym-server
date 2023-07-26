import { NextFunction, Request, Response } from 'express';
import Calendar from '../../database/calendar';
import CustomError from '../../helpers';

const deleteCalendar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Calendar.deleteOne({ _id: id });
    res.status(201).json({ deleted, msg: 'calendar deleted successfully!' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default deleteCalendar;
