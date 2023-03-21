import { AuthInterface } from "../interfaces/auth.interface";
import { UserInterface } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import { decrypt, encrypt } from "../utils/bcrypt.handler";

const registerNewUser = async (user: UserInterface) => {
  const exist = await UserModel.find({ email: user.email });

  if (exist.length) {
    console.log('User already exist', exist);

    return false;
  } else {
    user.password = await encrypt(user.password);

    const newUser = await UserModel.create(user);

    return newUser;
  }
}

const loginUser = async (auth: AuthInterface) => {
  let isLogged: boolean;
  const userFounded = await UserModel.findOne({ email: auth.email });

  if (userFounded) {
    isLogged = await decrypt(auth.password, userFounded.password);
  } else {
    return false;
  }

  return isLogged;
}

export {
  loginUser,
  registerNewUser
}