import { IProvider } from "./provider.interface";
import { ProviderModel } from "./provider.model";

const createProvider = async(providerData: IProvider) => {
    const result = await ProviderModel.create(providerData);
    return result;
}
const getAllProviders = async () => {
    const result = await ProviderModel.find();
    return result;
}
const getAProvider = async (providerId: string) => {
    const result = await ProviderModel.findById(providerId);
    return result;
}
const updateAProvider = async (providerId: string, providerData: Partial<IProvider>) => {
    const reuslt = await ProviderModel.findByIdAndUpdate(providerId, providerData)
    return reuslt;
}

export const ProviderServices = {
    createProvider,
    getAllProviders,
    getAProvider,
    updateAProvider
}