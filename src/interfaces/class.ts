import { Types } from 'mongoose';

interface IClass {
  className: string
  description: string
  trainerId: Types.ObjectId
  price: number
  userCount: number
}

export default IClass;
