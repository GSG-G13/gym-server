import express from 'express';
import checkRole from '../../middlewares/checkRole';
import { addCalendar, getCalendarByClassId, getCalendars } from '../../controllers';

const calendarRouter = express.Router();

calendarRouter.post('/:classId', checkRole, addCalendar);
calendarRouter.get('/', getCalendars);
calendarRouter.get('/:classId', getCalendarByClassId);

export default calendarRouter;
