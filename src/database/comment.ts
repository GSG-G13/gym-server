import mongoose from 'mongoose';
import IComments from '../interfaces/comment';

const commentsSchema = new mongoose.Schema<IComments>({
  commentBody: {
    type: String,
  },
  user: {
    type: String,
    ref: 'users',
  },
  announcement: {
    type: String,
    ref: 'announcements',
  },
});

const Comment = mongoose.model('comments', commentsSchema);

export default Comment;
