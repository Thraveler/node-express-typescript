import { Request, Response, NextFunction } from "express";
import { vefiryToken } from "../utils/jwt.handler";

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const jwt = authorizationHeader?.split(" ").pop();
    const tokenValidated = vefiryToken(`${jwt}`);

    console.log(`----------------------------------------------------`);
    console.log(`⚡️[server]: Request Header Authorization: ${JSON.stringify(authorizationHeader, null, 2)}`);
    console.log(`⚡️[server]: JWT: ${JSON.stringify(jwt, null, 2)}`);
    console.log(`⚡️[server]: JWT: ${JSON.stringify(tokenValidated, null, 2)}`);
    console.log(`----------------------------------------------------`);


    next();
  } catch (error) {
    console.error(`⚡️[server]: Token validation error: ${JSON.stringify(error, null, 2)}`);

    res.status(400).json({
      message: "There was an error while authorization validation"
    })
  }
}

export {
  jwtMiddleware
}