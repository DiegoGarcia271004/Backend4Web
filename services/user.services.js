import * as userRepository from "../repositories/user.repository.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import {
  UserAlreadyExistError,
  InvalidCredentialsError,
  NotFoundUserForUpdateError,
  NotFoundUserForDeleteError
} from "../errors/errors.js";

export const registerUser = async ({ username, email, password, steps }) => {
  const userExists = await userRepository.findUserByEmail(email);
  if (userExists) {
    throw new UserAlreadyExistError();
  }

  const newUser = await userRepository.createUser({
    username,
    email,
    password,
    steps,
  });
  return newUser;
};

export const loginUser = async ({ email, password }) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user || !(await user.comparePassword(password))) {
    throw new InvalidCredentialsError();
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    config.jwtSecret,
    {
      expiresIn: "1h",
    }
  );

  return {
    user: {
      id: user._id,
      username: user.username,
      steps: user.steps,
    },
    token,
  };
};

export const updateProgress = async (email, stepsUpdated) => {
  console.log(email, stepsUpdated);
  const user = await userRepository.findUserByEmail(email);

  if (!user) throw new NotFoundUserForUpdateError();

  const updatedUser = await userRepository.updateUserById(
    user._id,
    stepsUpdated
  );
  return updatedUser;
};

export const deleteUserAndProgress = async (email) => {
  const user = await userRepository.findUserByEmail(email);

  if (!user) 
	throw new NotFoundUserForDeleteError();

  const deletedUser = await userRepository.deleteUserById(user._id);
  return deletedUser;
};
