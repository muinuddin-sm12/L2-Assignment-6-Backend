import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>({
  providerId: { type: Schema.Types.ObjectId, ref: 'Provider', required: true },
  customerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mealId: { type: Schema.Types.ObjectId, ref: 'Meal', required: true },
  customizations: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  deliverySchedule: { type: Date, required: true },
  orderStatus: {
    type: String,
    enum: [
      'pending-payment',
      'paid',
      'accepted',
      'declined',
      'delivered',
      'cancelled',
    ],
    default: 'pending-payment',
  },
  paymentStatus: {
    type: String,
    enum: ['pending' , 'paid' , 'cancelled'],
    default: 'pending',
  },
  transaction: {
    id: String,
    transactionStatus: String,
    bank_status: String,
    sp_code: String,
    sp_message: String,
    method: String,
    date_time: String,
  },
}, {
    timestamps: true
});

export const Order = model<IOrder>('Order', orderSchema)