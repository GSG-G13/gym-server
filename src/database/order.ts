import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
  },
  status: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
  amount: {
    type: Number,
  },
});

const Order = mongoose.model('orders', orderSchema);

export default Order;
