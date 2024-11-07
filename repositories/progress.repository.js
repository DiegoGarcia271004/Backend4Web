import Progress from "../models/progress.model";

export const findProgressByIduser = async (id) => {
    return await Progress.findOne({ user: id });
}

export const createProgress = async ({user, steps}) => {
    const progress = new Progress({user, steps});   
    return await progress.save();
}

export const updateProgress = async (userID, steps) => {
    const updatedProgress = await Progress.findOneAndUpdate(
        { user: userID },
        { steps: steps },
        { 
            new: true,
            runValidators: true
        }
    );

    return updatedProgress;
}   