import express from 'express';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/validation';
import { addProduct, getProductByCategory } from '../controllers/products';
import checkRole from '../middlewares/checkRole';
import getProducts from '../controllers/products/getProducts';

const productRouter = express.Router();

productRouter.post('/', checkRole, validationData(productValidationSchema), addProduct);
productRouter.get('/', getProducts);
productRouter.get('/?category=category', getProductByCategory);
export default productRouter;
