import express from 'express';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/validation';
import { addProduct } from '../controllers/products';

const productRouter = express.Router();

productRouter.post('/', validationData(productValidationSchema), addProduct);

export default productRouter;
