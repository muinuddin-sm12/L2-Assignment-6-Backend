import { Types } from "mongoose";

export interface IOrder {
    providerId: Types.ObjectId;
    customerId: Types.ObjectId;
    mealId: Types.ObjectId;
    customizations: string;
    quantity: number;
    totalPrice: number;
    deliverySchedule: string,
    orderStatus: 'pending-payment' | 'paid' | 'accepted' | 'declined' | 'delivered' | 'cancelled';
    paymentStatus: 'pending' | 'paid' | 'cancelled';
    transaction: {
        id: string;
        transactionStatus: string;
        bank_status: string;
        sp_code: string;
        sp_message: string;
        method: string;
        date_time: string;
      };
}
