import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { orderService } from "./order.service";

const createOrder = catchAsync(async (req: Request, res: Response) => {
    const orderDetails = req?.body;
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
        message: 'Orders data retrieved successfully',
        status: true,
        data: order,
    })
})
const getUserOrders = catchAsync(async(req: Request, res: Response) => {
    const order = await orderService.getUserOrders(req.params.userId);
    res.status(200).json({
        message: 'User Orders data retrieved successfully',
        status: true,
        data: order,
    })
})
const getProviderOrders = catchAsync(async(req: Request, res: Response) => {
    const order = await orderService.getProviderOrders(req.params.providerId);
    res.status(200).json({
        message: 'Provider Orders data retrieved successfully',
        status: true,
        data: order,
    })
})

const updateOrderStatus = catchAsync(async(req:Request, res: Response) => {
    const result = await orderService.updateOrderStatus(req.params.id, req.body)
    res.status(200).json({
        message: 'Orders status updated successfully',
        status: true,
        data: result,
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
    getUserOrders,
    getProviderOrders,
    updateOrderStatus,
    verifyPayment,
}