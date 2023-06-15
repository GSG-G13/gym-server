import express, { type Router } from 'express';
import addReview from '../../controllers/reviews/addreview';
import checkAuth from '../../middlewares/checkAuth';

const reviewRouter: Router = express.Router();

reviewRouter.post('/', checkAuth, addReview);

export default reviewRouter;
