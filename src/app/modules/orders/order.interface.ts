import mongoose from "mongoose";

export interface IOrder {
    providerId: mongoose.Types.ObjectId;
    customerId: mongoose.Types.ObjectId;
    mealId: mongoose.Types.ObjectId;
    customizations: string;
    quantity: number;
    totalPrice: number;
    deliverySchedule: Date,
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
