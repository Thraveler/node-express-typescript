import { Schema, model } from "mongoose";
import { CarInterface } from "../interfaces/car.interface";

const CarSchema = new Schema<CarInterface>({
  brand: {
    type: String
  },
  model: {
    type: String
  },
  price: {
    type: Number
  },
  isHybrid: {
    type: Boolean
  },
  year: {
    type: Number
  }
}, {
  timestamps: true,
  versionKey: false
})

const CarModel = model('cars', CarSchema);

export {
  CarModel
};