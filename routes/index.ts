import { Router, } from 'express';
import { testRouter } from './test'

export const routes: Router = Router();

routes.use('/test', testRouter)