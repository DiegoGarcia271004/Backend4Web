import * as userRepository from '../repositories/user.repository.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { UserAlreadyExistError, InvalidCredentialsError } from '../errors/errors.js';

export const registerUser = async ({ username, email, password }) => {
	const userExists = await userRepository.findUserByEmail(email);
	if (userExists) {
		throw new UserAlreadyExistError();
	}

	const newUser = await userRepository.createUser({
		username,
		email,
		password
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
			expiresIn: '1h',
		}
	);

	return {
		user: {
			id: user._id,
			username: user.username,
		},
		token,
	};
};

