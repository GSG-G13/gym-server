import { object, string, number } from 'yup';

export default object({
  body: object({
    className: string().required().min(3, 'must be at least 3 characters long'),
    description: string().required(),
    trainerId: string(),
    price: number().required(),
    time: number().required(),
    limit: number().required(),
    userCount: number().required(),
  }),
});
