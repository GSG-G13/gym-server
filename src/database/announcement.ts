import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

const Announcement = mongoose.model('announcements', announcementSchema);

export default Announcement;
