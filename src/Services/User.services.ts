import { TUser } from "../Interfaces/User.interface";
import { UserModel } from "../Models/UserModel";


const createUserIntoDB = async (User: TUser) => {
  const result = await UserModel.create(User);
  return result;
};

const getAllUserIntoDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserintoDB = async (id: string) => {
  const result = await UserModel.findOne({ _id: id });
  return result;
};

const deleteUserintoDB = async (id: string) => {
  const result = await UserModel.deleteOne({ _id: id });
  return result;
};

const updateUserintoDB = async (id: string, data: Partial<TUser>) => {
  const existingUser = await UserModel.findById(id);
  if (!existingUser) {
    throw new Error("User not found");
  }

  const result = await UserModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );

  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserintoDB,
  deleteUserintoDB,
  updateUserintoDB,
};
