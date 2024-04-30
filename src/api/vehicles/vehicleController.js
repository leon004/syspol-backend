const vehicleService = require('./vehicleService');

const vehicleController = {
    // Crear un nuevo vehículo
    createVehicle: async (req, res) => {
        try {
            const vehicleData = req.body;
            const newVehicle = await vehicleService.createVehicle(vehicleData);
            res.status(201).json(newVehicle);
        } catch (error) {
            res.status(500).json({ message: "Error creating vehicle", error: error.message });
        }
    },

    // Obtener un vehículo por ID
    getVehicle: async (req, res) => {
        try {
            const { id } = req.params;
            const vehicle = await vehicleService.getVehicleById(id);
            if (!vehicle) {
                return res.status(404).json({ message: "Vehicle not found" });
            }
            res.json(vehicle);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving vehicle", error: error.message });
        }
    },

    // Actualizar un vehículo por ID
    updateVehicle: async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedVehicle = await vehicleService.updateVehicle(id, updateData);
            if (!updatedVehicle) {
                return res.status(404).json({ message: "Vehicle not found" });
            }
            res.json({ message: "Vehicle updated successfully", updatedVehicle });
        } catch (error) {
            res.status(500).json({ message: "Error updating vehicle", error: error.message });
        }
    },

    // Eliminar un vehículo por ID
    deleteVehicle: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await vehicleService.deleteVehicle(id);
            if (!deleted) {
                return res.status(404).json({ message: "Vehicle not found" });
            }
            res.json({ message: "Vehicle deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting vehicle", error: error.message });
        }
    }
};

module.exports = vehicleController;
