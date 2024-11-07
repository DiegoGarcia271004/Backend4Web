import progressRouter from "./progress.route.js";
import userRouter from "./user.route.js";
import express from 'express';

const mainRouter = express.Router();

mainRouter.use('/progress', progressRouter);
mainRouter.use('/user', userRouter);

export default mainRouter;