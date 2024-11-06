import express from "express";
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import { connectToDatabase } from './config/database.js';
import { config } from "./config/config.js";
//TODO hacer el Handler, hacer el import y descomentar la linea

const app = express();
connectToDatabase();


app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

//app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listen on ${config.port}`)
})
