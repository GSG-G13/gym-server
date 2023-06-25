import mongoose from 'mongoose';

const reviewsSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
  userId: {
    type: String,
  },
  review: {
    type: Number,
  },
});

const Review = mongoose.model('reviews', reviewsSchema);

export default Review;
