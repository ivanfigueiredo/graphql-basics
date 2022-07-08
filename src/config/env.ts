import * as dotenv from 'dotenv';

dotenv.config();

export const {
  SERVER_PORT,

  MONGO_HOST,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DATABASE_NAME
} = process.env;
