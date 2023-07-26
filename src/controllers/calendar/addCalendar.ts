import { NextFunction, Request, Response } from 'express';
import Calendar from '../../database/calendar';
import CustomError from '../../helpers';

const addCalendar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { start, end } = req.body;
    const { classId } = req.params;
    await Calendar.create({
      classId,
      start,
      end,
    });
    res.status(201).json('calendar added successfully!');
  } catch (error) {
    console.log(error)
    next(new CustomError(500, error.message));
  }
};

export default addCalendar;
