import { Request, Response } from 'express';
import { errorHandler } from "../utils/error.handler";
import * as OrderService from "../services/order.service";

const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await OrderService.getOrders();

    res.status(200).json(orders)
  } catch (error) {
    errorHandler(res, 'ORDERS_ERROR');
  }
}
export {
  getOrders
}