import 'dotenv/config';
import { connect } from 'mongoose';

async function mongoConnection(): Promise<void> {
  await connect(`${process.env.DB_URI}`);
}

export { mongoConnection }