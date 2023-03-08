import { Request, Response } from 'express';
import { errorHandler } from "../utils/error.handler";

const createItem = (req: Request, res: Response) => {
  try {
    res.send(req.body);
  } catch (error) {
    errorHandler(res, 'CREATE_ITEM_ERROR');
  }
}

const getItems = (req: Request, res: Response) => {
  try {

    res.send('Hello');
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