import { OrderModel } from "../models/order.model";

const getOrders = async () => {
  const result = await OrderModel.find()

  return result;
}

export {
  getOrders
}