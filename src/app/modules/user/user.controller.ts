import { Request, Response } from 'express';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsers();
  res.status(200).json({
    message: 'Users retrieved successfully',
    status: true,
    data: result,
  });
});
const getAUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserServices.getAUser(id);
  res.status(200).json({
    message: 'User retrieved successfully',
    status: true,
    data: result,
  });
});
const updateAUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const result = await UserServices.updateAUser(id, body);
  res.status(200).json({
    message: 'User updated successfully',
    status: true,
    data: result,
  });
});

export const UserController = {
  getAllUsers,
  getAUser,
  updateAUser
};
