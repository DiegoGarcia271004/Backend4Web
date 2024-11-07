import { body } from 'express-validator';

export const userRegisterValidationRules = [
	body('username').isString().notEmpty().withMessage('El nombre de usuario es requerido'),
	body('email').isEmail().notEmpty().withMessage('Se requiere un email válido'),
	body('password')
		.isLength({min: 8}).withMessage('La contraseña debe tener almenos 6 caracteres')
		.isLowercase().withMessage('La contraseña debe contener letras mayúsculas')
		.matches(/[$@#%&*]/).withMessage('La contraseña debe contener al menos uno de los siguientes caracteres especiales: $ @ # % & *')
];

export const UserLoginValidationRules = [
	body('email')
		.notEmpty().withMessage('Se requiere un correo electronico')
		.isEmail().withMessage('Se requiere un email válido'),
	body('password').notEmpty().withMessage('Se requiere una contraseña')
];