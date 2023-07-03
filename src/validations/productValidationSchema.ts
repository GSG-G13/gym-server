import { object, string, number } from 'yup';

export default object({
  body: object({
    title: string().required().min(3, 'must be at least 3 characters long'),
    image: string(),
    rating: number(),
    price: number().required(),
  }),
});
