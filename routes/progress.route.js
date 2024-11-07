import express from "express";
import {
  createProgressController,
  getProgressController,
  updateProgressController,
} from "../controllers/progress.controller";
import { progressValidationRules } from "../validators/progress.validator";
import validate from "../middlewares/validation.middleware";

const progressRouter = express.Router();

progressRouter.post('progress/user/post', progressValidationRules, validate, createProgressController);
progressRouter.put("/update/:userId", progressValidationRules, validate, updateProgressController);
progressRouter.get("/progress/user/get", getProgressController);

export default progressRouter;
