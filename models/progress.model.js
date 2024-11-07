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
            type: [Boolean],
            validate: {
                validator: function(steps) {
                    for (let i = 1; i < steps.length; i++) {
                        
                        if (steps[i] && !steps[i-1]) return false;
                    }
    
                    return true;
                },
                message: 'Para marcar un paso debe completarse el paso anterior',
            },
            required: true,
        },
    },
    {timestamps: true}
);

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;