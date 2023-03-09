import { Router } from 'express';
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/car.controller";

const router: Router = Router();

router.post('/', createItem)

router.get('/', getItems)

router.get('/:carId', getItem)

router.patch('/:carId', updateItem)

router.delete('/:carId', deleteItem)

export {
  router
}