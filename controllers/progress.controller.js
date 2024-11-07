import * as progressService from "../services/progress.service.js";
import { NotFoundUserError, NotFounProgressError } from "../errors/errors.js";

export const createProgressController = async (req, res) => {

  const { email, steps } = req.body;

  try {

    const newProgress = await progressService.createDataProgress(email, steps);
    res.status(201).json({ message: 'Progreso de usuario iniciado exitosamente', newProgress});

  } catch (error) {

    if (error instanceof NotFoundUserError) {
      res.status(400).json({ message: error.message });
      return;
    }

    res.status(404).json({
      message: 'Error al crear el progreso para el nuevo usuario: ',
      error: error.message,
    });
  }
}

export const getProgressController = async (req, res) => {
  
  const { email } = req.body;

  try {

    const progress = await progressService.getDataProgress(email);
    res.status(200).json(progress);

  } catch (error) {

    if (error instanceof NotFoundUserError) {
      res.status(400).json({ message: error.message });
      return;
    }

    if (error instanceof NotFounProgressError) {
      res.status(400).json({ message: error.message });
      return;
    }

    res
      .status(404)
      .json({
        message: "Error al obtener el progreso del usuario: ",
        error: error.message,
      });
  }
};

export const updateProgressController = async (req, res) => {
  const { userId } = req.params;
  const { steps } = req.body;

  try {
    const updatedProgress = await progressService.sendDataProgress(
      userId,
      steps
    );
    res
      .status(200)
      .json({ message: "Progreso actualizado exitosamente", updatedProgress });
  } catch (error) {

    if(error instanceof NotFounProgressError) {
      res.status(400).json({ message: error.message });
      return;
    }

    res.status(400).json({ 
      message: 'Error al actualizar el progreso del usuario', 
      error: error.message 
    });
  }
};
