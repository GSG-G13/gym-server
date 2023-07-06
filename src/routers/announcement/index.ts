import express, { type Router } from 'express';
import addAnnouncement from '../../controllers/announcement/addannouncement';
import checkRole from '../../middlewares/checkRole';
import getAnnouncements from '../../controllers/announcement/getannouncements';
import deleteAnnouncement from '../../controllers/announcement/deleteannouncement';
import updateAnnouncement from '../../controllers/announcement/updateacnnouncement';

const announcementRouter: Router = express.Router();

announcementRouter.post('/', checkRole, addAnnouncement);
announcementRouter.get('/', getAnnouncements);
announcementRouter.delete('/:id', deleteAnnouncement);
announcementRouter.put('/:id', updateAnnouncement);

export default announcementRouter;
