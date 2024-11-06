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