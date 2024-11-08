import User from "../models/user.model.js";

//Funciones necesarias para: encontrar, crear, actualizar y eliminar usuarios.

/**
 * Función encargada de poder encontrar al usuario utilizando su email
 * @param {String} email Recibe el email del usuario a buscar
 * @returns {Promise<User|null>} Retorna al usuario o null en caso de no existir
 */
export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

/**
 * Función encargada de crear un nuevo usuario
 * @param {Object} userData -Recibe los datos del usuario y crea un nuevo objeto User con estos datos
 * @returns {Promise<User>} Retorna un User con los datos ingresados
 */
export const createUser = async ({ username, email, password, steps }) => {
    const user = new User({ username, email, password, steps });
    return await user.save();
};

/**
 * Actualiza los datos de un usuario según su ID
 * @param {String} id Recibe el id del usuario al cual se le actualizará la información
 * @param {Object} updates Objeto con los valores y los campos a actualizar
 * @returns {Promise<User|null>} Retorna el usuario actualizado o null en caso de no encontrarlo
 */
export const updateUserById = async (id, updates) => {
    console.log(id, updates)
    return await User.findByIdAndUpdate(
        { _id: id }, 
        { steps: updates }, 
        { 
            new: true, 
            runValidators: true 
        }
    );
};

/**
 * Elimina a un usuario por su ID
 * @param {String} id Recibe el id del usuario a eliminar
 * @returns {Promise<User|null>} El usuario eliminado, o null si hubo un error o no se encuentra
 */
export const deleteUserById = async (id) => {
    return await User.findByIdAndDelete(id);
};

/**
 * Función encargada de buscar un usuario utilizando su ID
 * @param {String} id -Recibe el id del usuario a buscar
 * @returns {Promise<User|null>} -Retorna al usuario o null en caso de no encontrarlo
 */
export const findUserById = async (id) => {
    return await User.findOne(id);
};

//TODO Agregar el funcionamiento para agregar y cambiar el progreso del usuario
//En caso de que se implemente con el updateById ignorar y borrar el comentario anterior

export default {
    findUserByEmail,
    findUserById,
    createUser,
    updateUserById,
    deleteUserById
}