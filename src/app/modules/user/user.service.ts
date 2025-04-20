import { IUser } from './user.interface';
import { User } from './user.model';

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};
const getAUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
const updateAUser = async (id: string, userData: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate(
    id,
    { $set: userData },
    { new: true },
  );
  return result;
};

export const UserServices = {
  getAllUsers,
  getAUser,
  updateAUser,
};
