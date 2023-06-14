import { Request, Response } from 'express';
import Announcement from '../../database/announcement';

const addAnnouncement = async (req: Request, res: Response): Promise<void> => {
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
  } catch (error) {
    res.status(400).json(error);
  }
};

export default addAnnouncement;
