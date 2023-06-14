import mongoose from 'mongoose';

import type IClass from '../interfaces/class';

const classSchema = new mongoose.Schema <IClass>({
  className: {
    type: String,
  },

  description: {
    type: String,
  },

  trainerId: {
    type: Number,
  },
  price: {
    type: Number,
  },

  time: {
    type: Number,
  },
  limit: {
    type: Number,
  },

  userCount: {
    type: Number,
  },
});

const Class = mongoose.model('classes', classSchema);
export default Class;
