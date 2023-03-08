import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import { router } from './routes'
import { mongoConnection } from './config/mongo'

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json())
app.use('/', router);

mongoConnection().then((data) => {
  console.log(`⚡️[server]: Server is connected to db`);
}).catch((error) => {
  console.error(`⚡️[server]: Server is crashing on db connection.`, error);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});