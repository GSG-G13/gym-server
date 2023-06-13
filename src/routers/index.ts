import express, { type Router } from 'express'
import productRouter from './product'

const router: Router = express.Router()

router.use('/products', productRouter);
''
export default router
