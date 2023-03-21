import { Request, Response } from 'express';
import { errorHandler } from "../utils/error.handler";
import * as CarService from "../services/car.service";
import * as AuthService from "../services/auth.service";

const login = async (req: Request, res: Response) => {
  try {
    const isLogged = await AuthService.loginUser(req.body);

    if (isLogged) {
      res.status(200).json({
        message: "User logged successfully!"
      });
    } else {
      res.status(403).json({
        message: "There is something wrong with your credentials, please vefiry them."
      });
    }
  } catch (error) {
    errorHandler(res, 'LOGIN_ERROR');
  }
}

const register = async (req: Request, res: Response) => {
  try {
    const userCreated = await AuthService.registerNewUser(req.body);

    res.status(201).json(userCreated);

  } catch (error) {
    errorHandler(res, 'REGISTER_ERROR');
  }
}

export {
  login,
  register
}