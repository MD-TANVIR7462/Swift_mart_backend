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
    const { id } = req.params;
    const result = await studenServices.getSingleStudentintoDB(id);
    res.status(200).json({
      success: true,
      message: "Single Student retrive successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAstudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await studenServices.deleteStudentintoDB(id);
    res.status(200).json({
      success: true,
      message: "A Student Deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAstudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await studenServices.updateStudentintoDB(id, data);
    res.status(200).json({
      success: true,
      message: "A Student Updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentControllers = {
  creatStudent,
  getAllStudent,
  getSingleStudent,
  deleteAstudent,
  updateAstudent

};
