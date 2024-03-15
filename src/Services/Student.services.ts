import { TStudent } from "../Interfaces/Student.interface";
import { studentModel } from "../Models/StudentModel";

const createStudentIntoDB = async (student: TStudent) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentIntoDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentintoDB = async (id: string) => {
  const result = await studentModel.findOne({ _id: id });
  return result;
};

const deleteStudentintoDB = async (id: string) => {
  const result = await studentModel.deleteOne({ _id: id });
  return result;
};

const updateStudentintoDB = async (id: string, data: Partial<TStudent>) => {
  const existingStudent = await studentModel.findById(id);
  if (!existingStudent) {
    throw new Error("Student not found");
  }

  const result = await studentModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );

  return result;
};

export const studenServices = {
  createStudentIntoDB,
  getAllStudentIntoDB,
  getSingleStudentintoDB,
  deleteStudentintoDB,
  updateStudentintoDB,
};
