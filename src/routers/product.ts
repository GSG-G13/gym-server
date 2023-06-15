import express from 'express';
import productValidationSchema from '../validations/productValidationSchema';
import validationData from '../middlewares/validation';
import { addProduct, getProductById, getProducts } from '../controllers/products';
import checkRole from '../middlewares/checkRole';


const productRouter = express.Router();

productRouter.post('/', checkRole, validationData(productValidationSchema), addProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
export default productRouter;
