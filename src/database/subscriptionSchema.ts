import mongoose from 'mongoose';

import type ISubscription from '../interfaces/subscription';

const subscriptionSchema = new mongoose.Schema <ISubscription>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },

  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'classes',
  },
  status: {
    type: String,
  },
});
const Subscription = mongoose.model('subscriptions', subscriptionSchema);

export default Subscription;
