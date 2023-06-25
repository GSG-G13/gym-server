import express from 'express';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/validation';
import checkRole from '../middlewares/checkRole';
import { addProduct, getProductById, getProducts, updateProduct, deleteProduct, getProductByCategory } from '../controllers/products';

const productRouter = express.Router();

productRouter.post('/:categoryId', checkRole, validationData(productValidationSchema), addProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.get('/?category=category', getProductByCategory);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;
