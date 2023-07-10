import addAnnouncement from './announcement/addannouncement';
import { addCategory, deleteCategory, updateCategory, getCategories } from './categories';
import { createComment, getComments, deleteComment } from './comments';
import ChangePassword from './user/changePassword';
import deleteUser from './user/deleteUser';
import deleteUserInfo from './user/deleteUserInfo';
import getUserById from './user/getUserById';

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
};
