import { Request, Response, NextFunction } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`----------------------------------------------------`);
  console.log(`⚡️[server]: Request Path: ${JSON.stringify(req.path, null, 2)}`);
  console.log(`⚡️[server]: Request Body: ${JSON.stringify(req.body, null, 2)}`);
  console.log(`⚡️[server]: Request Query: ${JSON.stringify(req.query, null, 2)}`);
  console.log(`⚡️[server]: Request Params: ${JSON.stringify(req.params, null, 2)}`);
  console.log(`----------------------------------------------------`);

  next();
}

export {
  logMiddleware
}