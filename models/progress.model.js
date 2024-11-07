import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const progressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        steps: {
            type: [boolean],
            required: true,
        },
    },
    {timestamps: true}
);

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;    