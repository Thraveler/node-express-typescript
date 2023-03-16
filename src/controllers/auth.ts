import { Request, Response } from 'express';
import { errorHandler } from "../utils/error.handler";
import * as CarService from "../services/car.service";
import * as AuthService from "../services/auth.service";

const login = async (req: Request, res: Response) => {
  try {
    const carCreated = await CarService.insertCar(req.body);
    res.status(201).send(carCreated);
  } catch (error) {
    errorHandler(res, 'CREATE_CAR_ERROR');
  }
}

const register = async (req: Request, res: Response) => {
  try {
    const userCreated = await AuthService.registerNewUser(req.body);
    res.json(userCreated);
  } catch (error) {
    errorHandler(res, 'GET_CARS_ERROR');
  }
}

export {
  login,
  register
}