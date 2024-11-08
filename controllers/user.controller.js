import * as userService from "../services/user.services.js";
import {
  UserAlreadyExistError,
  InvalidCredentialsError,
  NotFoundUserForUpdateError,
  NotFoundUserForDeleteError
} from "../errors/errors.js";

export const register = async (req, res) => {
  const { username, email, password, steps } = req.body;

  try {
    const result = await userService.registerUser({
      username,
      email,
      password,
      steps,
    });

    res.status(201).json({ message: "Usuario registrado con éxito", result });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const value = error.keyValue[field];
      return register.status(400).json({
        message: `The ${field} '${value}' is already in use`,
      });
    }

    if (error instanceof UserAlreadyExistError) {
      return res.status(400).json({ message: error.message });
    }

    res
      .status(500)
      .json({ message: "Error al registrar el usuario", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginData = await userService.loginUser({ email, password });
    res.status(200).json(loginData);
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return res.status(400).json({ message: error.message });
    }

    res
      .status(500)
      .json({ message: "Error al iniciar sesión", error: error.message });
  }
};

export const update = async (req, res) => {
  const { email, steps } = req.body;

  try {
    console.log(email, steps);
    const updatedData = await userService.updateProgress(email, steps);
    res
      .status(200)
      .json({
        message: "Progreso de usuario actualizado exitosamente",
        data: updatedData,
      });
  } catch (error) {
    if (error instanceof NotFoundUserForUpdateError)
      return res.status(400).json({ message: error.message });

    res
      .status(500)
      .json({
        message: "Error al actualizar el progreso del usuario: ",
        error: error.message,
      });
  }
};


export const deleteUser = async (req, res) => {

	const { email } = req.body;

	try {

		const deletedData = await userService.deleteUserAndProgress(email);
		res.status(201).json({ 
			message: 'Gracias por usar nuestra aplicacion, esperamos haya sido de gran ayuda!', 
			data: deletedData.username
		});

	} catch (error) {
		
		if (error instanceof NotFoundUserForDeleteError)
			return res.status(400).json({ message: error.message });

		res.status(500).json({ message: "Error al finalizar la suscripcion: ", error: error.message});
	}
}