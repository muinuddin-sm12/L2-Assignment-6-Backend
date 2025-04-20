import config from '../../config';
import AppError from '../../errors/appError';
import { IImageFile } from '../../interface/IImageFile';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';

const registerUser = async (payload: Partial<IUser>, image: IImageFile) => {
  const register = {
    ...payload,
    image: image?.path,
  };
  const userData = await User.create(register);

  const jwtPayload = {
    _id: userData?._id,
    email: payload?.email,
    role: userData?.role,
  };
  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });

  return {
    accessToken: token,
  };
};

const loginUser = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload?.email }).select(
    '+password',
  );
  if (!user) {
    throw new Error('User is not exist!');
  }
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid Credentials');
  }

  const jwtPayload = {
    _id: user?._id,
    email: user?.email,
    role: user?.role,
  };
  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });

  return {
    accessToken: token,
  };
};

const changePassword = async (
  userId: string,
  payload: { oldPassword: string; newPassword: string },
) => {
  // checking if the user is exist
  const user = await User.findById(userId).select('password');
  // console.log(user)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload.oldPassword, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //hash new password
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  await User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      password: newHashedPassword,
    },
  );

  return null;
};

export const AuthServices = {
  registerUser,
  loginUser,
  changePassword,
};
