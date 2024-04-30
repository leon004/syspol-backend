const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userService = {
    // Crear un nuevo usuario
    createUser: async (userData) => {
        try {
            const user = await prisma.user.create({
                data: userData
            });
            return user;
        } catch (error) {
            throw new Error('Failed to create user: ' + error.message);
        }
    },

    // Encontrar un usuario por su nombre de usuario
    findUserByUserName: async (usuario) => {
        try {
            const user = await prisma.user.findUnique({
                where: { usuario }
            });
            return user;
        } catch (error) {
            throw new Error('Failed to find user: ' + error.message);
        }
    },

    // Obtener un usuario por ID
    getUserById: async (id) => {
        try {
            const user = await prisma.user.findUnique({
                where: { id: parseInt(id) }
            });
            return user;
        } catch (error) {
            throw new Error('Failed to retrieve user: ' + error.message);
        }
    },

    // Actualizar un usuario
    updateUser: async (id, updateData) => {
        try {
            const user = await prisma.user.update({
                where: { id: parseInt(id) },
                data: updateData
            });
            return user;
        } catch (error) {
            throw new Error('Failed to update user: ' + error.message);
        }
    },

    // Eliminar un usuario
    deleteUser: async (id) => {
        try {
            const user = await prisma.user.delete({
                where: { id: parseInt(id) }
            });
            return user;
        } catch (error) {
            throw new Error('Failed to delete user: ' + error.message);
        }
    }
};

module.exports = userService;
