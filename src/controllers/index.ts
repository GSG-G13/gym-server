import addAnnouncement from './announcement/addannouncement';
import { addCategory, deleteCategory, updateCategory, getCategories } from './categories';
import { createComment, getComments, deleteComment } from './comments';
import ChangePassword from './user/changePassword';
import deleteUser from './user/deleteUser';
import deleteUserInfo from './user/deleteUserInfo';
import getUserById from './user/getUserById';
import addCalendar from './calendar/addCalendar';
import getCalendars from './calendar/getCalendar';
import getCalendarByClassId from './calendar/getCalendarByClassId';
import deleteCalendar from './calendar/deleteCalendar';

export {
  addAnnouncement,
  addCategory,
  deleteCategory,
  updateCategory,
  getCategories,
  deleteUser,
  deleteUserInfo,
  getComments,
  createComment,
  deleteComment,
  getUserById,
  ChangePassword,
  addCalendar,
  getCalendars,
  getCalendarByClassId,
  deleteCalendar,

};
