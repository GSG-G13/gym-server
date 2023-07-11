import { Request, Response } from 'express';
import ChatModel from '../../database/chat';
import userData from '../../interfaces/userDataI';

const getChat = async (req: Request, res: Response) => {
  const chatHistory = await ChatModel.find().populate('user').lean().exec();

  const room = {
    messages: {},
  };

  const messages = chatHistory.reduce((acc, message) => ({
    ...acc,
    [message?._id.toString()]: {
      _id: message?._id,
      message: message.message,
      user: message.user?._id,
      username: (message.user as unknown as userData)?.username,
      createdAt: message?.createdAt,
    },
  }), {});

  room.messages = messages;

  return res.status(200).json({ room });
};

export default getChat;
