import { Request, Response } from 'express';
import { errorHandler } from "../utils/error.handler";
import * as CarService from "../services/car.service";

const createItem = async (req: Request, res: Response) => {
  try {
    const carCreated = await CarService.insertCar(req.body);
    res.send(carCreated);
  } catch (error) {
    errorHandler(res, 'CREATE_ITEM_ERROR');
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const cars = await CarService.fetchCars();
    res.json(cars);
  } catch (error) {
    errorHandler(res, 'GET_ITEMS_ERROR');
  }
}

const getItem = (req: Request, res: Response) => {
  try {

    res.send('Hello');
  } catch (error) {
    errorHandler(res, 'GET_ITEM_ERROR');
  }
}

const updateItem = (req: Request, res: Response) => {
  try {

    res.send('Hello');
  } catch (error) {

    errorHandler(res, 'UPDATE_ITEM_ERROR');
  }
}

const deleteItem = (req: Request, res: Response) => {
  try {

    res.send('Hello');
  } catch (error) {
    errorHandler(res, 'DELETE_ITEM_ERROR');
  }
}

export {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
}