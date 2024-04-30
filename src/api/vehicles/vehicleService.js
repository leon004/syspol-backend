const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const vehicleService = {
    // Crear un nuevo vehículo
    createVehicle: async (vehicleData) => {
        try {
            const vehicle = await prisma.vehiculo.create({
                data: vehicleData
            });
            return vehicle;
        } catch (error) {
            throw new Error('Failed to create vehicle: ' + error.message);
        }
    },

    // Obtener un vehículo por ID
    getVehicleById: async (id) => {
        try {
            const vehicle = await prisma.vehiculo.findUnique({
                where: { id: parseInt(id) }
            });
            return vehicle;
        } catch (error) {
            throw new Error('Failed to retrieve vehicle: ' + error.message);
        }
    },

    // Actualizar un vehículo
    updateVehicle: async (id, vehicleData) => {
        try {
            const vehicle = await prisma.vehiculo.update({
                where: { id: parseInt(id) },
                data: vehicleData
            });
            return vehicle;
        } catch (error) {
            throw new Error('Failed to update vehicle: ' + error.message);
        }
    },

    // Eliminar un vehículo
    deleteVehicle: async (id) => {
        try {
            const vehicle = await prisma.vehiculo.delete({
                where: { id: parseInt(id) }
            });
            return vehicle;
        } catch (error) {
            throw new Error('Failed to delete vehicle: ' + error.message);
        }
    }
};

module.exports = vehicleService;
