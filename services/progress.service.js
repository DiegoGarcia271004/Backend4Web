import * as userRepository from '../repositories/user.repository.js';
import * as progressRepository from '../repositories/progress.repository.js';
import { NotFoundUserError, NotFounProgressError } from '../errors/errors.js';

export const createDataProgress = async (email, steps) => {

    try {

        const user = await userRepository.findUserByEmail(email);
    
        if (!user) 
            throw new NotFoundUserError();

        const newProgress = await progressRepository.createProgress({ user: user._id, steps: steps });
        return newProgress;

    } catch (error) {

        throw new Error(`Error al crear el progreso del usuario: ${error.message}`);
    }
}

export const updateDataProgress = async (userID, steps) => {
   
    try {

        const updatedProgress = await progressRepository.updateProgress(userID, steps);

        if (!updatedProgress) 
            throw new NotFounProgressError();

        return updatedProgress;
    } catch (error) {

        throw new Error(`Error al actualizar el progreso del usuario: ${error.message}`);
    }
}

export const getDataProgress = async (email) => {

    try {
        const user = await userRepository.findUserByEmail(email);

        if (!user) {
            throw new NotFoundUserError();
        }

        const progress = await progressRepository.findProgressByIduser(user._id);

        if (!progress) {
            throw new NotFounProgressError();
        }

        return progress;
    } catch (error) {
        
        throw new Error(`Error al obtener el progreso del usuario: ${error.message}`);
    }
}   