const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const infractionService = {
    // Crear una nueva infracción
    createInfraction: async (infractionData) => {
        try {
            const infraction = await prisma.infraccion.create({
                data: infractionData
            });
            return infraction;
        } catch (error) {
            throw new Error('Failed to create infraction: ' + error.message);
        }
    },

    // Obtener una infracción por su ID
    getInfractionById: async (id) => {
        try {
            const infraction = await prisma.infraccion.findUnique({
                where: { id: parseInt(id) },
                include: {
                    policia: true, // Asumiendo que quieres incluir detalles del policía que registró la infracción
                }
            });
            return infraction;
        } catch (error) {
            throw new Error('Failed to retrieve infraction: ' + error.message);
        }
    },

    // Actualizar una infracción
    updateInfraction: async (id, infractionData) => {
        try {
            const infraction = await prisma.infraccion.update({
                where: { id: parseInt(id) },
                data: infractionData
            });
            return infraction;
        } catch (error) {
            throw new Error('Failed to update infraction: ' + error.message);
        }
    },

    // Eliminar una infracción
    deleteInfraction: async (id) => {
        try {
            const infraction = await prisma.infraccion.delete({
                where: { id: parseInt(id) }
            });
            return infraction;
        } catch (error) {
            throw new Error('Failed to delete infraction: ' + error.message);
        }
    },

    // Obtener infracciones por ID del policía
    getInfractionsByPoliciaId: async (policiaId) => {
        try {
            const infractions = await prisma.infraccion.findMany({
                where: { policiaId: parseInt(policiaId) }
            });
            return infractions;
        } catch (error) {
            throw new Error('Failed to retrieve infractions: ' + error.message);
        }
    }
};

module.exports = infractionService;
