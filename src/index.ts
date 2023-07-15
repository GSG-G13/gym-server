import express, { type Express } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import router from './routers';
import { PORT, DB_URL } from './config';
import ChatModel from './database/chat';

const app: Express = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', router);

const room = {
  messages: {},
  users: {},
};

const saveMessage = async ({ userData, message }) => {
  await ChatModel.create({
    user: userData._id,
    message,
  });
};

// eslint-disable-next-line no-unused-vars

io.on('connection', async (socket) => {
  // listen to join event: when user join notify all clients that a user has joined
  socket.on('join', (userData) => {
    room.users[userData._id] = userData;

    socket.broadcast.emit('user-join', {
      type: 'user-join',
      payload: {
        username: userData?.username,
        _id: userData?._id,
        email: userData?.email,
      },
    });

    socket.emit('users-list', {
      type: 'users-list',
      payload: room.users,
    });
  });

  // listen to send-message event: save the message to db ( non blocking meaning don't await ).
  // broadcast the message to all clients
  socket.on('send-message', ({ userData, message }) => {
    const messageId = new mongoose.Types.ObjectId();

    saveMessage({ userData, message });

    room.messages[messageId.toString()] = {
      _id: messageId,
      message,
      user: userData._id,
    };

    socket.broadcast.emit('receive-message', {
      type: 'receive-message',
      payload: {
        _id: messageId,
        message,
        user: userData._id,
        username: userData.username,
      },
    });
  });

  // listen to disconnect event: does nothing; could be used to notify clients user has left.
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('user-disconnect', (data) => {
    delete room.users[data?.userData?._id];
  });

  setInterval(() => {
    socket.emit('users-list', {
      type: 'users-list',
      payload: room.users,
    });
  }, 5000);
});

server.listen(PORT, async () => {
  console.log('SERVER IS RUNNING!');

  await mongoose.connect(DB_URL);
  console.log('DB connected');
});
