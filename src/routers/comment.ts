import express, { type Router } from 'express';
import addComment from '../controllers/comment/addcomment';
import checkAuth from '../middlewares/checkAuth';

// fix spelling errors

const commentRouter: Router = express.Router();

commentRouter.post('/', checkAuth, addComment);

export default commentRouter;
