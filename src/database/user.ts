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
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  gender: {
    type: String,
  },
  goalweight: {
    type: Number,
  },
  role: {
    type: String,
  },

});

const User = mongoose.model('users', userSchema);

export default User;
