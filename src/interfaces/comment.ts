import { Types } from 'mongoose';

 interface IComments {
  // commentBody: String
  // user: String
  // announcement: String
  commentBody: String
  user: Types.ObjectId
  announcement: Types.ObjectId
}

export default IComments;
