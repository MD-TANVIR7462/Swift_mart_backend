import { TProduct } from "../Interfaces/Product.interface";
import { ProductModel } from "../Models/ProductModel";

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSignleProductIntoDB = async (id: string) => {
  const result = await ProductModel.find({ _id: id });
  return result;
};
const deleteAProductIntoDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};
const updateAProductIntoDB = async (id: string, data: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate(
     {_id:id },
    { $set: data },
    { new: true }
  );
  return result;
};

export const producServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSignleProductIntoDB,
  deleteAProductIntoDB,
  updateAProductIntoDB,
};
