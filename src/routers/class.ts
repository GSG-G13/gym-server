import express, { type Router } from 'express';
import addClass from '../controllers/classes/addClass';
import validationData from '../middlewares/validation';
import classesValidationSchema from '../validations/classesValidationSchema';
import checkRole from '../middlewares/checkRole';

const classRouter: Router = express.Router();

classRouter.post('/', checkRole, validationData(classesValidationSchema), addClass);

export default classRouter;
