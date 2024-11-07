import express from "express";
import {
  createProgressController,
  getProgressController,
  updateProgressController,
} from "../controllers/progress.controller.js";
import { 
  progressSendValidationRules, 
  progressUpdateValidationRules, 
  progressFetchValidationRules } from "../validators/progress.validator.js";
import validate from "../middlewares/validation.middleware.js";

const progressRouter = express.Router();

progressRouter.post('/post', progressSendValidationRules, validate, createProgressController);
progressRouter.put("/update/:userId", progressUpdateValidationRules, validate, updateProgressController);
progressRouter.get("/get", progressFetchValidationRules, validate, getProgressController);

export default progressRouter;
