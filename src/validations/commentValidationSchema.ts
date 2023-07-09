import { object, string } from 'yup';

export default object({
  body: object({
    comment: string().required(),
  }),
});
