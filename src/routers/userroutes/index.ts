import express, { type Router } from 'express';
import signupController from '../../controllers/user/signup';

const userRouter: Router = express.Router();

userRouter.post('/', signupController);
