import express, { type Router } from 'express';
import validationData from '../middlewares/validation';
import classesValidationSchema from '../validations/classesValidationSchema';
import checkRole from '../middlewares/checkRole';
import { addClass, getClasses, getClassBYId, updateClass, deleteClass } from '../controllers/classes';

const classRouter: Router = express.Router();

classRouter.post('/:trainerId', checkRole, validationData(classesValidationSchema), addClass);
classRouter.get('/', getClasses);
classRouter.get('/:id', getClassBYId);
classRouter.put('/:id', checkRole, updateClass);

classRouter.delete('/:id', checkRole, deleteClass);

export default classRouter;
