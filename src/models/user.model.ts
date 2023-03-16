import { Schema, model } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";

const UserSchema = new Schema<UserInterface>({
  username: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('users', UserSchema);

export {
  UserModel
};