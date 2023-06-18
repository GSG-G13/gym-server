import express from 'express';
import checkRole from '../../middlewares/checkRole';
import { addCategory, updateCategory } from '../../controllers';

// import deleteCategory from '../controllers/categories/deleteCategory';
// import getCategories from '../controllers/categories/getCategories';

const categoryRouter = express.Router();

categoryRouter.post('/', checkRole, addCategory);
// categoryRouter.get('/', getCategories);
categoryRouter.put('/:id', checkRole, updateCategory);
// categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
