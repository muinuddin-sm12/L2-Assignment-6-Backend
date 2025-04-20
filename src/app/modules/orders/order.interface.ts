import { Types } from "mongoose";

export interface IOrder {
    providerId: Types.ObjectId;
    customerId: Types.ObjectId;
    mealPlanId: Types.ObjectId;
    customizations: string;
    price: number;
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
