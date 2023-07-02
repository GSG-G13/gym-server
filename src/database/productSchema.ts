import mongoose from 'mongoose';
import type IProduct from '../interfaces/product';

const productSchema = new mongoose.Schema <IProduct>({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  },

});

const Product = mongoose.model('products', productSchema);
export default Product;
