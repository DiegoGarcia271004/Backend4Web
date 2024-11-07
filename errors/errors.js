export class UserAlreadyExistError extends Error {
    constructor(message = 'El usuario ya existe') {
        super(message);
        this.name = 'UserAlreadyExistError';
    };
};

export class InvalidCredentialsError extends Error {
    constructor(message = 'Credenciales inválidas'){
        super(message);
        this.name = 'InvalidCredentialsError';
    };
};

export class NotFoundUserError extends Error {
    constructor(message = 'Email de usuario no valido') {
        super(message);
        this.name = 'NotFoundUserError'
    }
}

export class NotFounProgressError extends Error {
    constructor(message = 'Progreso no encontrado para el usuario') {
        super(message);
        this.name = 'NotFoundProgressError'
    }
}