import express, { type Router } from 'express';
import addAnnouncement from '../../controllers/announcement/addannouncement';
import validationData from '../../middlewares/validation';
import announcementValidation from '../../validations/announcement';
import checkRole from '../../middlewares/checkRole';
import getAnnouncements from '../../controllers/announcement/getannouncements';

const announcementRouter: Router = express.Router();

announcementRouter.post('/', checkRole, validationData(announcementValidation), addAnnouncement);
announcementRouter.get('/', getAnnouncements);

export default announcementRouter;
