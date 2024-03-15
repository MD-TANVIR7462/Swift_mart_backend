import { Schema, model } from "mongoose";
import { TStudent } from "../Interfaces/Student.interface";

const studentSchema = new Schema<TStudent>({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateofBirth: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});


export const studentModel = model<TStudent>('student', studentSchema);