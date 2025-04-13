import { IImageFile } from "../../interface/IImageFile";
import { IProvider } from "./provider.interface";
import { Provider } from "./provider.model";

const createProvider = async(providerData: Partial<IProvider>, logo: IImageFile) => {
    const provider = new Provider({
        ...providerData,
        logo: logo?.path 
    })
    const result = await provider.save();
    return result;
}
const getAllProviders = async () => {
    const result = await Provider.find();
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