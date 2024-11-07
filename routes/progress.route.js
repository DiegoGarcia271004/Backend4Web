import express from "express";
import {
  createProgressController,
  getProgressController,
  updateProgressController,
} from "../controllers/progress.controller.js";
import { progressValidationRules } from "../validators/progress.validator.js";
import validate from "../middlewares/validation.middleware.js";

const progressRouter = express.Router();

progressRouter.post('/post', progressValidationRules, validate, createProgressController);
progressRouter.put("/update/:userId", progressValidationRules, validate, updateProgressController);
progressRouter.get("/get", getProgressController);

export default progressRouter;
