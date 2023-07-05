import express from 'express';
import getChat from '../../controllers/chat';

const chatRouter = express.Router();

chatRouter.get('/getChat', getChat);

export default chatRouter;
