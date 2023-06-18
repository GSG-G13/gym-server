import mongoose from 'mongoose';
import IComments from '../interfaces/comment';

const commentsSchema = new mongoose.Schema<IComments>({
  commentBody: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  announcement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'announcements',
  },
});

const Comment = mongoose.model('comments', commentsSchema);

export default Comment;
