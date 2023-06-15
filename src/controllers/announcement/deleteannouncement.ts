import { NextFunction, Request, Response } from 'express';
import Announcement from '../../database/announcement';
import CustomError from '../../helpers';

const deleteAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedAnnouncement = await Announcement.deleteOne({ _id: id });

    res.status(202).json({
      deletedAnnouncement,
      msg: 'this announcement has been deleted successfully',
    });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export default deleteAnnouncement;
