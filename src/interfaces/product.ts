import { Types } from 'mongoose';

export default interface IProduct {
  title: string
  image: string
  rating: number
  price: number,
  category:Types.ObjectId
};