import { NextFunction, Request, Response } from 'express';
import Announcement from '../../database/announcement';
import CustomError from '../../helpers';

const updateAnnouncement = async (
  req:Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { title, description, image } = req.body;

    const { id } = req.params;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      id,
      { title, description, image },
    );
    res.status(203).json({
      updatedAnnouncement,
      msg: 'announcement has been updated successfully',
    });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default updateAnnouncement;
