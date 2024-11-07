import { body } from "express-validator";

export const progressValidationRules = [
    body('steps')
        .notEmpty().withMessage('Progreso vacio')
        .isArray().withMessage('El campo de progreso no representa una coleccion')
        .custom((steps) => {
            for (let i = 1; i < steps.length; i++) {
                if (setps[i] === true && steps[i-1] === false) {
                    throw new Error('Para marcar este paso debe completar el paso anterior');
                }
            }

            return true;
        }).withMessage('Para completar un paso debe haber completado el paso anterior previamente'),
    body('user')
        .notEmpty().withMessage('Campo de referencia de usuario vacio')
        .isMongoId().withMessage('El campo user no representa una referencia valida')
]