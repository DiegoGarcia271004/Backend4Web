import { body } from 'express-validator';

export const userRegisterValidationRules = [
	body('username').isString().notEmpty().withMessage('El nombre de usuario es requerido'),
	body('email').isEmail().withMessage('Se requiere un email válido'),
	body('password').isLength({min: 6})
		.withMessage('La contraseña debe tener almenos 6 caracteres')
		.isLowercase().withMessage('La contraseña debe contener letras mayúsculas')
];

export const UserLoginValidationRules = [
	body('email').isEmail().withMessage('Se requiere un email válido'),
	body('password').notEmpty().withMessage('Se requiere una contraseña')
];