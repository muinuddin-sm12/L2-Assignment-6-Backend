import { User } from '../user/user.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';
import { orderUtils } from './order.utils';

const createOrder = async (payload: Partial<IOrder>, client_ip: string) => {
  if (!payload?.mealPlanId) {
    throw new Error('Order is not specified');
  }
  // const mealPlanData = await MealPlan.findById(payload.mealPlanId);
  const user = await User.findById(payload?.customerId);
  if (!user) {
    throw new Error('Something went wrong!');
  }

  let order = await Order.create(payload);

  // payment integration
  const shurjopayPayload = {
    amount: payload.price,
    order_id: order._id,
    currency: 'USD',
    customer_name: user.name,
    customer_address: 'N/A',
    customer_email: user.email,
    customer_phone: 'N/A',
    customer_city: 'N/A',
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);
  if (payment?.transactionStatus) {
    order = await order.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;
};

const getOrders = async () => {
  const data = await Order.find();
  return data;
};
const getUserOrders = async (userId: string) => {
  const data = await Order.find({customerId: userId});
  // console.log(data)
  return data;
};
const getProviderOrders = async (id: string) => {
  const data = await Order.find({providerId: id});
  // console.log(data)
  return data;
};

const updateOrderStatus = async(id: string, orderData:Partial<IOrder>) => {
  const result = await Order.findByIdAndUpdate(
    id,
    { $set: orderData },
    { new: true },
  );
  return result;
}


const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);
  //   console.log('verify payment from service', verifiedPayment)
  if (verifiedPayment.length) {
    await Order.findOneAndUpdate(
      {
        'transaction.id': order_id,
      },
      {
        'transaction.bank_status': verifiedPayment[0].bank_status,
        'transaction.sp_code': verifiedPayment[0].sp_code,
        'transaction.sp_message': verifiedPayment[0].sp_message,
        'transaction.transactionStatus': verifiedPayment[0].transaction_status,
        'transaction.method': verifiedPayment[0].method,
        'transaction.date_time': verifiedPayment[0].date_time,
        paymentStatus:
          verifiedPayment[0].bank_status == 'Success'
            ? 'paid'
            : verifiedPayment[0].bank_status == 'Failed'
              ? 'pending'
              : verifiedPayment[0].bank_status == 'Cancel'
                ? 'cancelled'
                : '',
        orderStatus: verifiedPayment[0].bank_status == 'Success' && 'paid',
      },
    );
  }

  return verifiedPayment;
};

export const orderService = {
  createOrder,
  getOrders,
  getUserOrders,
  getProviderOrders,
  updateOrderStatus,
  verifyPayment,
};
