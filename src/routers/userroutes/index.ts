import express, { type Router } from 'express';
import signup from '../../controllers/user/signup';

const userRouter: Router = express.Router();

userRouter.post('/', signup);

export default userRouter;
