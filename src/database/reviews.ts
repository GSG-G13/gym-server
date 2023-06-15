import mongoose from 'mongoose';

const reviewsSchema = new mongoose.Schema({
  productID: {
    type: String,
  },
  userID: {
    type: String,
  },
  review: {
    type: Number,
  },
});

const Review = mongoose.model('reviews', reviewsSchema);

export default Review;
