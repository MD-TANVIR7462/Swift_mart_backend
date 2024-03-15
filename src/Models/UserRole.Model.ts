import { Schema, model } from "mongoose";
import { TuserRole } from "../Interfaces/Role.interface";

const UserRoleSchema = new Schema<TuserRole>({
  role: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const UserRoleModel = model<TuserRole>("user", UserRoleSchema);
