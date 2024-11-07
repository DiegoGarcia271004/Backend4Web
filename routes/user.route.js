import express from "express";
import {register, login} from '../controllers/user.controller.js';
import { UserLoginValidationRules, userRegisterValidationRules } from "../validators/user.validator.js";
import validate from "../middlewares/validation.middleware.js";

const userRouter = express.Router();

userRouter.post('/register', userRegisterValidationRules, validate, register);
userRouter.post('/login', UserLoginValidationRules, validate, login);

export default userRouter;