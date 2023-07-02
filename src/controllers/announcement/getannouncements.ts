import { NextFunction, Request, Response } from 'express';
import Announcement from '../../database/announcement';
import CustomError from '../../helpers';

const getAnnouncements = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const announcements = await Announcement.find().populate('roleId');
    res.status(200).json({
      announcements,
      msg: 'Get Announcements Successfully',
    });
  } catch (error) {
    next(new CustomError(400, error.message));
  }
};

export default getAnnouncements;
