import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import { router } from './routes'

const app: Express = express();
const port = process.env.PORT || 8000;

app.use('/', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});