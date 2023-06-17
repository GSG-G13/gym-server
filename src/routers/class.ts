import express, { type Router } from 'express';
import validationData from '../middlewares/validation';
import classesValidationSchema from '../validations/classesValidationSchema';
import checkRole from '../middlewares/checkRole';
import { addClass, getClasses, getClassBYId, deleteClass } from '../controllers/classes';

const classRouter: Router = express.Router();

classRouter.post('/', checkRole, validationData(classesValidationSchema), addClass);
classRouter.get('/', getClasses);
classRouter.get('/:id', getClassBYId);

classRouter.delete('/:id', deleteClass);

export default classRouter;
