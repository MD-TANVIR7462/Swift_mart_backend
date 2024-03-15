

import { TStudent } from "../Interfaces/Student.interface";
import { studentModel } from "../Models/StudentModel";

const createStudentIntoDB = async (student:TStudent) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentIntoDB = async () => {
const  result = await studentModel.find()
return result
}

const getSingleStudentintoDB = async (id : string) =>{
  const result = await studentModel.findOne({ _id:id})
  return result
}



export const studenServices= {
   createStudentIntoDB,
   getAllStudentIntoDB,
   getSingleStudentintoDB
}