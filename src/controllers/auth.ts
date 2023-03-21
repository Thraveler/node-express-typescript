import { Request, Response } from 'express';
import { errorHandler } from "../utils/error.handler";
import * as CarService from "../services/car.service";
import * as AuthService from "../services/auth.service";

const login = async (req: Request, res: Response) => {
  try {
    const userFounded = await AuthService.loginUser(req.body);

    res.status(200).json(userFounded);
  } catch (error) {
    errorHandler(res, 'LOGIN_ERROR');
  }
}

const register = async (req: Request, res: Response) => {
  try {
    const isLogged = await AuthService.registerNewUser(req.body);

    res.status(201).json(isLogged);

  } catch (error) {
    errorHandler(res, 'REGISTER_ERROR');
  }
}

export {
  login,
  register
}