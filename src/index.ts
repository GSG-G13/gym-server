import mongoose from 'mongoose';
import server from './app';
import { PORT, DB_URL } from './config';

server.listen(PORT, async () => {
  console.log('SERVER IS RUNNING!');

  await mongoose.connect(DB_URL);
  console.log('DB connected');
});
