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
  const updatedName = { ...existingStudent.name };
  if (data.name) {
    for (const key in data.name) {
      if (data.name.hasOwnProperty(key)) {
        updatedName[key] = data.name[key];
      }
    }
  }
  const updateFields: Partial<TStudent> = {
    name: updatedName,
    ...data,
  };
  const result = await studentModel.findByIdAndUpdate(
    id,
    { $set: updateFields },
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
