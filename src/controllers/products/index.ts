import { Product } from '../../database/productSchema'
// import type IProduct from '../../interfaces/product'
import { type Response, type Request } from 'express'

const addProduct = async (req: Request, res: Response) => {
  try {
    const { title, image, rating, price } = req.body
    await Product.create({
      title,
      image,
      rating,
      price
    })
    res.status(201).json({ msg: 'Created Product Successfully' })
  } catch (error) {
    console.log(error)
  }
}
