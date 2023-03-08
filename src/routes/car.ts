import { Router } from 'express';
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/car.controller";

const router: Router = Router();

router.post('/', createItem)

router.get('/', getItems)

router.get('/:itemId', getItem)

router.patch('/:itemId', updateItem)

router.delete('/:itemId', deleteItem)

export {
  router
}