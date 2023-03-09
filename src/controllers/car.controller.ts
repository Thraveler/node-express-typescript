import { Request, Response } from 'express';
import { errorHandler } from "../utils/error.handler";
import * as CarService from "../services/car.service";

const createItem = async (req: Request, res: Response) => {
  try {
    const carCreated = await CarService.insertCar(req.body);
    res.status(201).send(carCreated);
  } catch (error) {
    errorHandler(res, 'CREATE_CAR_ERROR');
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const cars = await CarService.fetchCars();
    res.json(cars);
  } catch (error) {
    errorHandler(res, 'GET_CARS_ERROR');
  }
}

const getItem = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const car = await CarService.getCarById(carId)
    
    res.send(car);
  } catch (error) {
    errorHandler(res, 'GET_CAR_ERROR');
  }
}

const updateItem = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const data = req.body;
    const carUpdated = await CarService.updateCarById(carId, data);
    
    res.status(201).send(carUpdated);
  } catch (error) {

    errorHandler(res, 'UPDATE_CAR_ERROR');
  }
}

const deleteItem = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const carDeleted = await CarService.deleteCarById(carId)
    
    res.status(201).send(carDeleted);
  } catch (error) {
    errorHandler(res, 'DELETE_CAR_ERROR');
  }
}

export {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
}