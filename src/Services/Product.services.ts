
import { TProduct } from "../Interfaces/Product.interface";
import { ProductModel } from "../Models/ProductModel";

const createProductIntoDB= async(product: TProduct)=>{
const result = await ProductModel.create(product);
return result
}

export const producServices={
   createProductIntoDB
}