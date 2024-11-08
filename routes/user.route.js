import express from "express";
import { register, login, update, deleteUser } from '../controllers/user.controller.js';
import { 
    UserLoginValidationRules, 
    userRegisterValidationRules, 
    UserUpdateProgressValidationRules,
    UserDeleteValidationRules 
} from "../validators/user.validator.js";
import validate from "../middlewares/validation.middleware.js";

const userRouter = express.Router();

userRouter.post('/register', userRegisterValidationRules, validate, register);
userRouter.post('/login', UserLoginValidationRules, validate, login);
userRouter.put('/update', UserUpdateProgressValidationRules, validate, update);
userRouter.delete('/delete', UserDeleteValidationRules, validate, deleteUser);

export default userRouter;