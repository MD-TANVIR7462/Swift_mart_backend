import { NextFunction, Request, Response } from "express";
import { producServices } from "../Services/Product.services";


const creatProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = req.body;
    const result = await producServices.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: "product stored successfully in Database",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   
    const result = await producServices.getAllProductIntoDB();
    res.status(200).json({
      success: true,
      message: "products retrive successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



const getSingleProduct = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const {id} = req.params;
     const result = await producServices.getSignleProductIntoDB(id);
     res.status(200).json({
       success: true,
       message: "single product retrive successfully",
       data: result,
     });
   } catch (error) {
     next(error);
   }
 };


 const deleteAProduct = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const {id}=req.params;
     const result = await producServices.deleteAProductIntoDB(id);
     res.status(200).json({
       success: true,
       message: "product Deleted successfully",
       data: result,
     });
   } catch (error) {
     next(error);
   }
 };

 
 const updateAProduct = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const {id}=req.params;
     const data = req.body;
     const result = await producServices.updateAProductIntoDB(id,data);
     res.status(200).json({
       success: true,
       message: "product Updated successfully",
       data: result,
     });
   } catch (error) {
     next(error);
   }
 };

 



export const productControllers = {
   creatProduct,
   getAllProduct,
   getSingleProduct,
   deleteAProduct,
   updateAProduct
};
