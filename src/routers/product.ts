import express from 'express';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/validation';
import checkRole from '../middlewares/checkRole';
import { addProduct, getProductByCategory, getProductById, getProducts } from '../controllers/products';

const productRouter = express.Router();

productRouter.post('/', checkRole, validationData(productValidationSchema), addProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.get('/?category=category', getProductByCategory);
export default productRouter;
