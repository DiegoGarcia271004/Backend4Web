import { body, param } from "express-validator";

export const progressSendValidationRules = [
    body('steps')
        .notEmpty().withMessage('Progreso vacio')
        .isArray().withMessage('El campo de progreso no representa una coleccion')
        .custom((steps) => {
            for (let i = 1; i < steps.length; i++) {
                if (steps[i] === true && steps[i - 1] === false) {
                    throw new Error('Para marcar este paso debe completar el paso anterior');
                }
            }
            return true;
        }).withMessage('Para completar un paso debe haber completado el paso anterior previamente'),
    body('email') 
        .notEmpty().withMessage('Campo de correo electrónico vacío')
        .isEmail().withMessage('El campo email no representa una dirección de correo válida')
]

export const progressUpdateValidationRules = [
    param('userId')
        .notEmpty().withMessage('El ID de usuario es requerido')
        .isMongoId().withMessage('El ID de usuario no representa un identificador válido de MongoDB'),
    
    body('steps')
        .notEmpty().withMessage('El campo de progreso está vacío')
        .isArray().withMessage('El campo de progreso debe ser un arreglo')
        .custom((steps) => {
            for (let i = 1; i < steps.length; i++) {
                if (steps[i] === true && steps[i - 1] === false) {
                    throw new Error('Para marcar este paso debe completar el paso anterior');
                }
            }
            return true;
        }).withMessage('Para completar un paso debe haber completado el paso anterior previamente')
]

export const progressFetchValidationRules = [
    body('email')
        .notEmpty().withMessage('Campo de correo electronico vacio')
        .isEmail().withMessage('El campo email no representa una direccion de correo electronico valida')
]