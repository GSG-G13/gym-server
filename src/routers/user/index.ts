import express, { type Router } from 'express';
import signup from '../../controllers/user/signup';
import validationData from '../../middlewares/validation';
import { signupValidationSchema } from '../../validations/index';
import signIn from '../../controllers/user/signin';
import loginvalidation from '../../validations/loginvalidation';

const userRouter: Router = express.Router();

userRouter.post('/signup', validationData(signupValidationSchema), signup);
userRouter.post('/login', validationData(loginvalidation), signIn);

export default userRouter;
