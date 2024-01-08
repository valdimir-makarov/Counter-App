import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './Constants.js';

const app = express();
const port = process.env.PORT || 3000; // Use process.env.PORT if defined, otherwise use 3000

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
    
    });
    console.log("CONNECTED SUCCESSFULLY");

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("CANNOT CONNECT TO DATABASE:", error);
  }
})();
