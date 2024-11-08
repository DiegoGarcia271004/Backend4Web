import { body } from 'express-validator';

export const userRegisterValidationRules = [
	body('username')
		.isString().withMessage('El nombre de usuario no es valido')
		.notEmpty().withMessage('El nombre de usuario es requerido'),
	body('email')
		.isEmail().withMessage('El correo electronico no es valido')
		.notEmpty().withMessage('Se requiere un email válido'),
	body('password')
		.isLength({min: 8}).withMessage('La contraseña debe tener almenos 8 caracteres')
		.matches(/[A-Z]/).withMessage('La contraseña debe tener al menos una letra mayúscula')
		.matches(/[$@#%&*]/).withMessage('La contraseña debe contener al menos uno de los siguientes caracteres especiales: $ @ # % & *'),
	body('steps')
		.isArray().withMessage('El campo de progreso no representa una coleccion')
		.notEmpty().withMessage('El campo de progreso es requerido')
		.custom((steps) => {
			if (steps.length !== 5) 
				throw new Error('El campo de progreso no representa una coleccion valida');
			return true;
		})
];

export const UserLoginValidationRules = [
	body('email')
		.notEmpty().withMessage('Se requiere un correo electronico')
		.isEmail().withMessage('Se requiere un email válido'),
	body('password')
		.notEmpty().withMessage('Se requiere una contraseña')
];

export const UserUpdateProgressValidationRules = [
	body('email')
		.notEmpty().withMessage('Se requiere un correo electronico')
		.isEmail().withMessage('El correo electronico no es valido'),
	body('steps')
		.isArray().withMessage('El campo de progreso no representa una coleccion')
		.notEmpty().withMessage('El campo de progreso es requerido')
		.custom((steps) => {
			if (steps.length !== 5) 
				throw new Error('El campo de progreso no representa una coleccion valida');
			return true;
		})
]

export const UserDeleteValidationRules = [
	body('email')
		.notEmpty().withMessage('Se requiere un correo electronico')
		.isEmail().withMessage('El correo electronico no es valido')
]