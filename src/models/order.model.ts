import { Schema, model } from "mongoose";
import { OrderInterface } from "../interfaces/order.interface";

const OrderSchema = new Schema<OrderInterface>({
  userEmail: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
}, {
  timestamps: true,
  versionKey: false
})

const OrderModel = model('orders', OrderSchema);

export {
  OrderModel
};