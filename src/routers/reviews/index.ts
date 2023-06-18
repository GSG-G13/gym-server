import express, { type Router } from 'express';
import addReview from '../../controllers/reviews/addreview';
import checkAuth from '../../middlewares/checkAuth';
import deleteReview from '../../controllers/reviews/deletereview';

const reviewRouter: Router = express.Router();

reviewRouter.post('/', checkAuth, addReview);
reviewRouter.delete('/:productID', checkAuth, deleteReview);

export default reviewRouter;
