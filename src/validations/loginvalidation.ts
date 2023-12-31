import { object, string } from 'yup';

export default object({
  body: object({
    email: string().email().required(),
    password: string().required(),
  }),
});
