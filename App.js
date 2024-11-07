import express from "express";
import cors from 'cors';
import mainRouter from "./routes/mainRoutes.js";
import { connectToDatabase } from './config/database.js';
import { config } from "./config/config.js";
//TODO hacer el Handler, hacer el import y descomentar la linea

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/api/app', mainRouter);

//app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`listen on ${config.port}`)
})
