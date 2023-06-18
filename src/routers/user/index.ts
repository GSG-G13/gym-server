import express, { type Router } from 'express';
import signup from '../../controllers/user/signup';
import validationData from '../../middlewares/validation';
import { signupValidationSchema } from '../../validations/index';
import getAllUsers from '../../controllers/user/getallusers';
import checkRole from '../../middlewares/checkRole';

const userRouter: Router = express.Router();

userRouter.post('/', validationData(signupValidationSchema), signup);
userRouter.get('/', checkRole, getAllUsers);

export default userRouter;
