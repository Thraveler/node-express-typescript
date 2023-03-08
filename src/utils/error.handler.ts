import { Response } from "express";

const errorHandler = (res: Response, error: string) => {
  res.status(500).json({
    error
  });
}

export {
  errorHandler
}