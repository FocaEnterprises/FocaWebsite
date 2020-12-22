/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-multi-assign */
import mongoose from 'mongoose';

const {
  MONGODB_URI, MONGODB_DB, MONGODB_USER, MONGODB_PASS,
} = process.env;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable',
  );
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable',
  );
}

if (!MONGODB_USER) {
  throw new Error(
    'Please define the MONGODB_USER environment variable',
  );
}

if (!MONGODB_PASS) {
  throw new Error(
    'Please define the MONGODB_PASS environment variable',
  );
}

const url = MONGODB_URI
  .replace('<username>', MONGODB_USER)
  .replace('<password>', MONGODB_PASS)
  .replace('<dbname>', MONGODB_DB);

const connection: { isConnected?: number } = {}; /* creating connection object */

async function dbConnect() {
  /* check if we have connection to our databse */
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  console.log('Connected to the database');
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
