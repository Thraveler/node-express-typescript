import { Router } from 'express';
import { getOrders } from '../controllers/order.controller';
import { jwtMiddleware } from '../middleware/jwt.middleware';

const router: Router = Router();

router.get('/', jwtMiddleware, getOrders);

export {
  router
}