import express, { type Router } from 'express';
import addAnnouncement from '../../controllers/announcement/addannouncement';
import validationData from '../../middlewares/validation';
import announcementValidation from '../../validations/announcement';

const announcementRouter: Router = express.Router();

announcementRouter.post('/', validationData(announcementValidation), addAnnouncement);

export default announcementRouter;
