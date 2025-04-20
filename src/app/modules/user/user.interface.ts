/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export enum UserRole {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    PROVIDER = 'provider',
}
export interface IUser {
    _id: string;
    name: string;
    email: string;
    image: string;
    password: string;
    role: "customer" | "provider" | "admin";
    isActive?: boolean;
    _v?: number | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserModel extends Model<IUser> {
    //instance methods for checking if the user exist
    isUserExists(id: string): Promise<IUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
  }
  
export type TUserRole = keyof typeof USER_ROLE;
  