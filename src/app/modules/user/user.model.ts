/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
    {
    name: {type: String, required: [true, 'User name is required']},
    email: {
        type:String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },
    role: {
        type: String,
        enum: {
            values: ["customer", "provider"],
            message: "{VALUE} is not supported",
        },
        default: 'customer',
    },
}, {timestamps: true});
userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
    next();
})
userSchema.post('save', function (doc, next){
    doc.password= "";
    next();
});

userSchema.statics.isUserExists = async function (id: string) {
    return await User.findById({ id }).select('+password');
  };
  
  userSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword,
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  };
export const User = model<IUser, UserModel>('User', userSchema);