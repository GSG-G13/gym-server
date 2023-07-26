import { NextFunction, Request, Response } from 'express';
import Calendar from '../../database/calendar';
import CustomError from '../../helpers';

const getCalendarByClassId = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
  try {
    const { classId } = req.params;
    const calendarByClassId = await Calendar.find({ classId }).populate('classId');
    res.status(200).json({ calendarByClassId, msg: 'Get Successfully!' });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};
export default getCalendarByClassId;
