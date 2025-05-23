import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>({
  providerId: { type: Schema.Types.ObjectId, ref: 'Provider'},
  customerId: { type: Schema.Types.ObjectId, ref: 'User',  },
  mealPlanId: { type: Schema.Types.ObjectId, ref: 'Meal', },
  // customizations: { type: String },
  price: { type: Number , },
  mealPerDay: {type: [String]},
  deliverySchedule: { type: String },
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