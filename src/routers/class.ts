import express, { type Router } from 'express';
import validationData from '../middlewares/validation';
import classesValidationSchema from '../validations/classesValidationSchema';
import checkRole from '../middlewares/checkRole';
import { addClass, getClasses } from '../controllers/classes';

const classRouter: Router = express.Router();

classRouter.post('/', checkRole, validationData(classesValidationSchema), addClass);
classRouter.get('/', getClasses);

export default classRouter;
