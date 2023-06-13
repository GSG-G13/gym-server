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

});

export const Product = mongoose.model('products', productSchema);
