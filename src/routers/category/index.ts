import express from 'express';
import checkRole from '../../middlewares/checkRole';
import { addCategory, updateCategory, getCategories } from '../../controllers';

// import deleteCategory from '../controllers/categories/deleteCategory';

const categoryRouter = express.Router();

categoryRouter.post('/', checkRole, addCategory);
// categoryRouter.get('/', getCategories);
categoryRouter.put('/:id', checkRole, updateCategory);
categoryRouter.get('/', getCategories);

// categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
