import mongoose from 'mongoose';
import ICategory from '../interfaces/category';

const categorySchema = new mongoose.Schema<ICategory>({
  categoryName: {
    type: String,
  },
  categoryImage: {
    type: String,
  },

});
const Category = mongoose.model('categories', categorySchema);
export default Category;
