import express, { type Router } from 'express';
import addClass from '../controllers/classes/addClass';

const classRouter: Router = express.Router();

classRouter.post('/', addClass);

export default classRouter;
