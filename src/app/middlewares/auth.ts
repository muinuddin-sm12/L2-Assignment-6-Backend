import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import status from 'http-status';
import AppError from '../errors/appError';
import catchAsync from '../utils/catchAsync';
import config from '../config';
import { User } from '../modules/user/user.model';
import { UserRole } from '../modules/user/user.interface';

const auth = (...requiredRoles: UserRole[]) => {
   return catchAsync(
      async (req: Request, res: Response, next: NextFunction) => {
         const token = req.headers.authorization;

         if (!token) {
            throw new AppError(
               status.UNAUTHORIZED,
               'You are not authorized!'
            );
         }

         const decoded = jwt.verify(
            token,
            config.jwt_access_secret as string
         ) as JwtPayload;

         const { email, role } = decoded;
         const user = await User.findOne({ email, role});
         if(user?.isActive){
            throw new AppError(status.BAD_REQUEST, 'This User is Blocked')
         };
         if (!user) {
            throw new AppError(
               status.NOT_FOUND,
               'This user is not found !'
            );
         }

         if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(
               status.UNAUTHORIZED,
               'You are not authorized!'
            );
         }

         // req.user = decoded as JwtPayload & { role: string };
         next();
      }
   );
};

export default auth;
