import { Schema, model } from "mongoose";
import { TUser } from "../Interfaces/User.interface";

const UserSchema = new Schema<TUser>({
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


export const UserModel = model<TUser>('User', UserSchema);