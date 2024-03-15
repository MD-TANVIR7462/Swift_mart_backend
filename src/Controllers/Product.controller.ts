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



export const productControllers = {
   creatProduct
};
