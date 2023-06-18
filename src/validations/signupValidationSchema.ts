import { object, string, number } from 'yup';

export default object({
  body: object({
    username: string().required(),
    email: string().required(),
    password: string().required(),
    height: number(),
    weight: number(),
    gender: string(),
    goalWeight: string(),
    role: string(),
  }),
});
