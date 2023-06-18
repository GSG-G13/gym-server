import express from 'express';
import checkRole from '../../middlewares/checkRole';
import { addCategory, deleteCategory, updateCategory, getCategories } from '../../controllers';

// import getCategories from '../controllers/categories/getCategories';
// import updateProduct from '../controllers/products/updateProduct';

const categoryRouter = express.Router();

categoryRouter.post('/', checkRole, addCategory);
// categoryRouter.get('/', getCategories);
// categoryRouter.put('/:id', updateProduct);
categoryRouter.put('/:id', checkRole, updateCategory);
categoryRouter.get('/', getCategories);
categoryRouter.delete('/:id', checkRole, deleteCategory);

export default categoryRouter;
