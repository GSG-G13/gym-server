import express, { type Router } from 'express';
import signup from '../../controllers/user/signup';
import validationData from '../../middlewares/validation';
import { signupValidationSchema } from '../../validations/index';
import signIn from '../../controllers/user/signin';
import loginvalidation from '../../validations/loginvalidation';
import getAllUsers from '../../controllers/user/getallusers';
import checkRole from '../../middlewares/checkRole';
import checkAuth from '../../middlewares/checkAuth';
import updateUser from '../../controllers/user/updatauser';
import getTrainers from '../../controllers/user/getTrainers';
import signOut from '../../controllers/user/signOut';
import { deleteUser, deleteUserInfo } from '../../controllers';

const userRouter: Router = express.Router();

userRouter.post('/signup', validationData(loginvalidation), signup);
userRouter.post('/login', validationData(loginvalidation), signIn);
userRouter.get('/', checkRole, getAllUsers);
userRouter.put('/:id', updateUser);
userRouter.get('/trainers', getTrainers);
userRouter.get('/signout', signOut);
userRouter.delete('/:id', checkRole, deleteUser);
userRouter.delete('/', checkAuth, deleteUserInfo);

export default userRouter;
