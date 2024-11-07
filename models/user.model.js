import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		}//TODO Agregar el atributo donde se guardará el array de las tareas completadas
	},
	{timestamps: true}
);

//hasheo de la contraseña
userSchema.pre('save', async function (next) {
	if(!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

//método para la comparación de contraseña
userSchema.methods.comparePassword = async function (candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;