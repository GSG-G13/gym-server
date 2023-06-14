import express, { type Router } from 'express';
import signup from '../../controllers/user/signup';
// import validationData from '../../middlewares/validation';

const userRouter: Router = express.Router();

userRouter.post('/', signup);

export default userRouter;
