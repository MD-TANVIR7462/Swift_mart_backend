import { NextFunction, Request, Response } from "express";
import { studenServices } from "../Services/Student.services";

const creatStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const student = req.body;
    const result = await studenServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studenServices.getAllStudentIntoDB();
    res.status(200).json({
      success: true,
      message: "All Student retrive successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   const {id}= req.params
    const result = await studenServices.getSingleStudentintoDB(id);
    res.status(200).json({
      success: true,
      message: "All Student retrive successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


























export const studentControllers = {
  creatStudent,
  getAllStudent,
  getSingleStudent
};
