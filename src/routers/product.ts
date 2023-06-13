import express from 'express';
import addProduct from '../controllers/products';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/productValidation';

const productRouter = express.Router();

productRouter.post('/', validationData(productValidationSchema), addProduct);

export default productRouter;
