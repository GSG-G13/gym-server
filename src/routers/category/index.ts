import express from 'express';
import checkRole from '../../middlewares/checkRole';
import { addCategory, getCategories } from '../../controllers';

// import deleteCategory from '../controllers/categories/deleteCategory';
// import updateProduct from '../controllers/products/updateProduct';

const categoryRouter = express.Router();

categoryRouter.post('/', checkRole, addCategory);
categoryRouter.get('/', getCategories);

// categoryRouter.put('/:id', updateProduct);
// categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
