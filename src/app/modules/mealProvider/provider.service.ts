import { IProvider } from "./provider.interface";
import { Provider } from "./provider.model";

const createProvider = async(providerData: IProvider) => {
    const result = await Provider.create(providerData);
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