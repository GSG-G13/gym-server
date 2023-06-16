import express, { type Router } from 'express';
import addReview from '../../controllers/reviews/addreview';
import checkAuth from '../../middlewares/checkAuth';
import getReviews from '../../controllers/reviews/getreviews';

const reviewRouter: Router = express.Router();

reviewRouter.post('/', checkAuth, addReview);
reviewRouter.get('/:id', getReviews);

export default reviewRouter;
