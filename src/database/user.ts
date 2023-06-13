import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  hieght: {
    type: Number,
  },
  wieght: {
    type: Number,
  },
  gender: {
    type: String,
  },
  goalWieght: {
    type: Number,
  },
  role: {
    type: String,
  },

});

const User = mongoose.model('users', userSchema);

export default User;
