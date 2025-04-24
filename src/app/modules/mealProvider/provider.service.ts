// import AppError from "../../errors/appError";
import AppError from "../../errors/appError";
import { IImageFile } from "../../interface/IImageFile";
import { User } from "../user/user.model";
import { IProvider } from "./provider.interface";
import { Provider } from "./provider.model";
import httpStatus from 'http-status';

const createProvider = async(providerData: Partial<IProvider>, logo: IImageFile) => {
    // console.log(logo?.path);
    const provider = new Provider({
        ...providerData,
        logo: logo?.path 
    })
    // check if already a provider 
    const userData = await User.findById(providerData?.userId);
    // console.log(userData);
    if(userData?.role === 'provider'){
        throw new AppError(httpStatus.BAD_REQUEST, 'Already you are a provider.')
    }

    // check if already send request 
    const existingRequest = await Provider.findOne({userId : providerData?.userId});
    if(existingRequest){
        throw new AppError(httpStatus.BAD_REQUEST, 'Already send request, Please wait for admin response.')
    }
    const result = await provider.save();
    return result;
}
const getAllProviders = async () => {
    const result = await Provider.find().populate('userId');
    return result;
}
const getAProvider = async (providerId: string) => {
    const result = await Provider.findById(providerId);
    return result;
}
const updateAProvider = async (providerId: string, providerData: Partial<IProvider>) => {
    const reuslt = await Provider.findByIdAndUpdate(providerId, providerData)
    return reuslt; 
}

export const ProviderServices = {
    createProvider,
    getAllProviders,
    getAProvider,
    updateAProvider
}