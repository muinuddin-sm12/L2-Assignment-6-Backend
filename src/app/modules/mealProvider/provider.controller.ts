import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProviderServices } from "./provider.service";
import { IImageFile } from "../../interface/IImageFile";


const createProvider = catchAsync(async(req: Request, res:Response) => {
    const result = await ProviderServices.createProvider(req.body, req.file as IImageFile);
    res.status(200).json({
        message: 'Provider is created successfully',
        status: true,
        data: result, 
    })
})
const getAllProviders = catchAsync(async(req:Request, res: Response) => {
    const result = await ProviderServices.getAllProviders()
    res.status(200).json({
        message: 'Providers data retrieved successfully!',
        status: true,
        data: result
    })
})
const getAProvider = catchAsync(async(req:Request, res: Response) => {
    const id = req.params.providerId;
    const result = await ProviderServices.getAProvider(id)
    res.status(200).json({
        message: "Provider data retrieved successfully",
        status: true,
        data: result
    })
})
const updateAProvider = catchAsync(async(req:Request, res: Response) => {
    const id = req.params.providerId;
    const body = req.body;
    const result = await ProviderServices.updateAProvider(id, body)
    res.status(200).json({
        message: "Provider data is updated successfully!",
        status: true, 
        data: result
    })
})

export const ProviderController = {
    createProvider,
    getAllProviders,
    getAProvider,
    updateAProvider,
}