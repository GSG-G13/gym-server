import express from 'express';
import checkRole from '../../middlewares/checkRole';
import { addCategory, deleteCategory, updateCategory, getCategories } from '../../controllers';

const categoryRouter = express.Router();

categoryRouter.post('/', checkRole, addCategory);
categoryRouter.get('/', getCategories);
categoryRouter.put('/:id', checkRole, updateCategory);
categoryRouter.delete('/:id', checkRole, deleteCategory);

export default categoryRouter;
