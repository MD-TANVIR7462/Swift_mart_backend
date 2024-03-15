import { NextFunction, Request, Response } from "express";
import { userRoleServices } from "../Services/UserRole.services";



const creatRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userWithRole = req.body;
    const result = await userRoleServices.createRoleIntoDB(userWithRole);
    res.status(200).json({
      success: true,
      message: "UserRole created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


const getAllRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   
   const roleQuery = req.query.role;
    let filteredResult;

    if (roleQuery) {
      filteredResult = await userRoleServices.GetAllRoleIntoDB({ role: roleQuery });
    } else {

      filteredResult = await userRoleServices.GetAllRoleIntoDB({});
    }
    res.status(200).json({
      success: true,
      message: "All Users With their role retrive successfully",
      data: filteredResult,
    });
  } catch (error) {
    next(error);
  }
};



const getSingleRole = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const {id} = req.params;
     const result = await userRoleServices.GetSingleRoleIntoDB(id);
     res.status(200).json({
       success: true,
       message: "single user with Role retrive successfully",
       data: result,
     });
   } catch (error) {
     next(error);
   }
 };


 const deleteARole = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const {id}=req.params;
     const result = await userRoleServices.deleteARoleIntoDB(id);
     res.status(200).json({
       success: true,
       message: "Users Role Deleted successfully",
       data: result,
     });
   } catch (error) {
     next(error);
   }
 };

 
 const updateARole = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const {id}=req.params;
     const data = req.body;
     const result = await userRoleServices.updateARoleIntoDB(id,data);
     res.status(200).json({
       success: true,
       message: "product Updated successfully",
       data: result,
     });
   } catch (error) {
     next(error);
   }
 };

 



export const UserRoleControllers = {
   creatRole,
   getAllRole,
   getSingleRole,
   updateARole,
   deleteARole
};
