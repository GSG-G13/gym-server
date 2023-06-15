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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  price: {
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
