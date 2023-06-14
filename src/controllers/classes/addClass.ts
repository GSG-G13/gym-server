import { type Request, type Response } from 'express';
import Class from '../../database/classSchema';

const addClass = async (req: Request, res: Response): Promise<void> => {
  try {
    const { className, description, trainerId, price, time, limit, userCount } = req.body;
    const checkName = await Class.findOne({ className });
    if (checkName) {
      res.status(400).json({ msg: 'className already existed!' });
    }
    await Class.create({
      className,
      description,
      trainerId,
      price,
      time,
      limit,
      userCount,
    });
    res.status(201).json('class added successfully!');
  } catch (error) {
    console.log(error);
  }
};

export default addClass;
