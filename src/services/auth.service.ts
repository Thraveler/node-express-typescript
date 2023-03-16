import { UserInterface } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

const registerNewUser = async (user: UserInterface) => {
  const exist = await UserModel.find({email: user.email});

  if(exist.length) {
    console.log('User already exist', exist);

    return false;
  } else {
    const newUser = await UserModel.create(user);

    return newUser;
  }
}

const loginUser = async () => {
}

export {
  loginUser,
  registerNewUser
}