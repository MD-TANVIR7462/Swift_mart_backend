import { NextFunction, Request, Response } from "express";
import { UserServices } from "../Services/User.services";


const creatUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const User = req.body;
    const result = await UserServices.createUserIntoDB(User);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserServices.getAllUserIntoDB();
    res.status(200).json({
      success: true,
      message: "All User retrive successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getSingleUserintoDB(id);
    res.status(200).json({
      success: true,
      message: "Single User retrive successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await UserServices.deleteUserintoDB(id);
    res.status(200).json({
      success: true,
      message: "A User Deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await UserServices.updateUserintoDB(id, data);
    res.status(200).json({
      success: true,
      message: "A User Updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  creatUser,
  getAllUser,
  getSingleUser,
  deleteAUser,
  updateAUser

};
