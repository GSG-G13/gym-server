import { NextFunction, Request, Response } from 'express';
import Announcement from '../../database/announcement';
import CustomError from '../../helpers';

const addAnnouncement = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, image } = req.body;
    const { roleId } = req.params;

    await Announcement.create({
      title,
      description,
      image,
      roleId,
    });

    res.status(201).json({
      message: 'announcement has been created successfully',
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(new CustomError(400, error.message));
  }
};

export default addAnnouncement;
