import { string, object } from 'yup';

export default object({
  body: object({
    commentBody: string().required().min(5, 'Comment is too short'),
  }),
});
