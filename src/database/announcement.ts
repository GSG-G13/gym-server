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
    type: Number,
  },
});

const Announcement = mongoose.model('announcements', announcementSchema);

export default Announcement;
