import express from "express";
import {register, login} from '../controllers/user.controller.js';
import { UserLoginValidationRules, userRegisterValidationRules } from "../validators/user.validator.js";
import validate from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post('/register', userRegisterValidationRules, validate, register);
router.post('/login', UserLoginValidationRules, validate, login);

export default router;