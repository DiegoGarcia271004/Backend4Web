import * as userRepository from '../repositories/user.repository.js';
import * as progressRepository from '../repositories/progress.repository.js';
import { NotFoundUserError, NotFounProgressError } from '../errors/errors.js';

export const createDataProgress = async (email, steps) => {

    const user = await userRepository.findUserByEmail(email);
    
    if (!user) 
        throw new NotFoundUserError();

    const newProgress = await progressRepository.createProgress({ user: user._id, steps: steps });
    return newProgress;
}

export const updateDataProgress = async (userID, steps) => {
    const updatedProgress = await progressRepository.updateProgress(userID, steps);

    if (!updatedProgress) 
        throw new NotFounProgressError();

    return updatedProgress;
}

export const getDataProgress = async (email) => {

    const user = await userRepository.findUserByEmail(email);

    if (!user) {
        throw new NotFoundUserError();
    }

    const progress = await progressRepository.findProgressByIduser(user._id);
    
    if (!progress) {
        throw new NotFounProgressError();
    }

    return progress;
}   