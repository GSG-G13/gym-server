import express from 'express';
import { createComment, deleteComment, getComments } from '../../controllers';
import checkAuth from '../../middlewares/checkAuth';
import validationData from '../../middlewares/validation';
import commentValidationSchema from '../../validations/commentValidationSchema';

const commentRouter = express.Router();

commentRouter.post('/:announcementId', checkAuth, validationData(commentValidationSchema), createComment);
commentRouter.get('/', getComments);
commentRouter.delete('/:id', checkAuth, deleteComment);

export default commentRouter;
