import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const ChatModel = mongoose.model('chat', chatSchema);

export default ChatModel;
