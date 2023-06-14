import { object, string } from 'yup';

export default object({
  body: object({
    title: string().required(),
    description: string().required(),
    image: string(),
    roleId: string().required(),
  }),
});
