import { TuserRole } from "../Interfaces/Role.interface";
import { UserRoleModel } from "../Models/UserRole.Model";

const createRoleIntoDB = async (userRole: TuserRole) => {
  const result = await UserRoleModel.create(userRole);
  return result;
};

const GetAllRoleIntoDB = async () => {
  const result = await UserRoleModel.find();
  return result;
};

const GetSingleRoleIntoDB = async (id: string) => {
  const result = await UserRoleModel.findById(id);
  return result;
};

const deleteARoleIntoDB = async (id: string) => {
  const result = await UserRoleModel.deleteOne(id);
  return result;
};

const updateARoleIntoDB = async (id: string) => {
  const result = await UserRoleModel.deleteOne(id);
  return result;
};

export const userRoleServices = {
  createRoleIntoDB,
  GetAllRoleIntoDB,
  GetSingleRoleIntoDB,
  deleteARoleIntoDB,
  updateARoleIntoDB,
};
