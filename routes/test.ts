import { Router, Request, Response } from 'express';

export const testRouter: Router = Router();

testRouter.get('/', (req: Request, res: Response) => {
  res.send('Hi from test')
})