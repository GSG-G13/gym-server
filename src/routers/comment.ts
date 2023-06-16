import express, { type Router } from 'express';
import validationData from '../middlewares/validation';
import commentvalidation from '../validations/commentvalidation';
import addComment from '../controllers/comment/addcomment';
import checkAuth from '../middlewares/checkAuth';

// fix spelling errors

const commentRouter: Router = express.Router();

commentRouter.post('/', checkAuth, validationData(commentvalidation), addComment);

export default commentRouter;
