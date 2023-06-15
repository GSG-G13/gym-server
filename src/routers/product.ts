import express from 'express';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/validation';
import { addProduct } from '../controllers/products';
import checkRole from '../middlewares/checkRole';
import getProducts from '../controllers/products/getProducts';

const productRouter = express.Router();

productRouter.post('/', checkRole, validationData(productValidationSchema), addProduct);
productRouter.get('/', getProducts);
export default productRouter;
