/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import Calendar from '../../database/calendar';
import CustomError from '../../helpers';

const getCalendars = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const calendars = await Calendar.find().populate('classId');
    res.status(200).json({ calendars, msg: 'get calendars successfully!' });
  } catch (error:any) {
    next(new CustomError(500, error.message));
  }
};

export default getCalendars;
