import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { orderService } from "./order.service";

const createOrder = catchAsync(async (req: Request, res: Response) => {
    const orderDetails = req?.body;
    console.log(orderDetails);
    const order = await orderService.createOrder(orderDetails, req.ip!)
    res.status(200).json({
        message: 'Order placed successfully',
        status: true,
        data: order,
    })
})

const getOrders = catchAsync(async(req: Request, res: Response) => {
    const order = await orderService.getOrders();
    res.status(200).json({
        message: 'Order retrieved successfully',
        status: true,
        data: order,
    })
})

const verifyPayment = catchAsync(async (req: Request, res: Response) => {
  const order = await orderService.verifyPayment(req.query.order_id as string)  ;
  res.status(200).json({
    message: 'Order verified successfully',
    data: order
  })
})

export const OrderController = {
    createOrder,
    getOrders,
    verifyPayment,
}