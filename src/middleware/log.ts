import { Request, Response, NextFunction } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Headers', req.headers);
  console.log('Url', req.path);

  next();
}

export {
  logMiddleware
}