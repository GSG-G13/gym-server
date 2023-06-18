import express from 'express';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/validation';
<<<<<<< HEAD
import checkRole from '../middlewares/checkRole';
import { addProduct, getProductByCategory, getProductById, getProducts } from '../controllers/products';
=======
import { addProduct, getProductById, getProducts, updateProduct, deleteProduct } from '../controllers/products';
import checkRole from '../middlewares/checkRole';
>>>>>>> c1241d00ed0886a85254db7d8ff8533c29c7be6b

const productRouter = express.Router();

productRouter.post('/', checkRole, validationData(productValidationSchema), addProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
<<<<<<< HEAD
productRouter.get('/?category=category', getProductByCategory);
=======
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

>>>>>>> c1241d00ed0886a85254db7d8ff8533c29c7be6b
export default productRouter;
