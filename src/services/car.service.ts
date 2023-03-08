import { CarInterface } from "../interfaces/car.interface";
import { CarModel } from "../models/car.model";

const insertCar = async (car: CarInterface) => {
  const result = await CarModel.create(car);

  return result;
}

const fetchCars = async () => {
  const result = await CarModel.find()

  return result;
}

export {
  insertCar,
  fetchCars
}