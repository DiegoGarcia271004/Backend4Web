export class UserAlreadyExistError extends Error {
  constructor(message = "El usuario ya existe") {
    super(message);
    this.name = "UserAlreadyExistError";
  }
}

export class InvalidCredentialsError extends Error {
  constructor(message = "Credenciales inválidas") {
    super(message);
    this.name = "InvalidCredentialsError";
  }
}

export class NotFoundUserForUpdateError extends Error {
  constructor(
    message = "Email de usuario no valido para actualizacion de progreso"
  ) {
    super(message);
    this.name = "NotFoundUserForUpdateError";
  }
}

export class NotFoundUserForDeleteError extends Error {
    constructor(
        message = "No se ha encontrado el usuario para su eliminacion"
    ) {
        super(message);
        this.name = "NotFoundUserForDelete";
    }
}