import express, { type Router } from 'express';
import signup from '../../controllers/user/signup';
import validationData from '../../middlewares/validation';
import { signupValidationSchema } from '../../validations/index';

const userRouter: Router = express.Router();

userRouter.post('/', validationData(signupValidationSchema), signup);

export default userRouter;
