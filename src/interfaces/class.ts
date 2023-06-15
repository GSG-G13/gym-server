import { Types } from 'mongoose';

interface IClass {
  className: string
  description: string
  trainerId: Types.ObjectId
  price: number
  time: number
  limit: number
  userCount: number
}

export default IClass;
