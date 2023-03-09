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

const getCarById = async (carId: string) => {
  const car = await CarModel.findById(carId).exec();

  return car;
}

const updateCarById = async (carId: string, dataUpdated: CarInterface) => {
  const carUpdated = await CarModel.findByIdAndUpdate(carId, dataUpdated, { new: true })

  return carUpdated;
}

const deleteCarById = async (carId: string) => {
  const carDeleted = await CarModel.findByIdAndRemove(carId)

  return carDeleted;
}

export {
  insertCar,
  fetchCars,
  getCarById,
  updateCarById,
  deleteCarById
}