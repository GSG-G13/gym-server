import express from 'express';
import { createComment, deleteComment, getComments } from '../../controllers';
import checkAuth from '../../middlewares/checkAuth';

const commentRouter = express.Router();

commentRouter.post('/:announcementId', checkAuth, createComment);
commentRouter.get('/', getComments);
commentRouter.delete('/:id', checkAuth, deleteComment);

export default commentRouter;
