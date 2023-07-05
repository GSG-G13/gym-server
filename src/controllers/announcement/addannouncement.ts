import { NextFunction, Response } from 'express';
import Announcement from '../../database/announcement';
import CustomError from '../../helpers';
import { roleRequest } from '../../middlewares/checkRole';
import userData from '../../interfaces/userDataI';

const addAnnouncement = async (
  req: roleRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { title, description, image } = req.body;
    const { id } = req.admin as userData;
    console.log(req.body);

    await Announcement.create({
      title,
      description,
      image,
      roleId: id,
    });

    res.status(201).json({
      message: 'announcement has been created successfully',
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);

    next(new CustomError(400, error.message));
  }
};

export default addAnnouncement;
