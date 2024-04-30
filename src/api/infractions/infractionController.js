const infractionService = require('./infractionService');

const infractionController = {
    // Crear una nueva infracción
    createInfraction: async (req, res) => {
        try {
            const infractionData = req.body;
            const newInfraction = await infractionService.createInfraction(infractionData);
            res.status(201).json(newInfraction);
        } catch (error) {
            res.status(500).json({ message: "Error creating infraction", error: error.message });
        }
    },

    // Obtener una infracción por ID
    getInfraction: async (req, res) => {
        try {
            const { id } = req.params;
            const infraction = await infractionService.getInfractionById(id);
            if (!infraction) {
                return res.status(404).json({ message: "Infraction not found" });
            }
            res.json(infraction);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving infraction", error: error.message });
        }
    },

    // Actualizar una infracción por ID
    updateInfraction: async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedInfraction = await infractionService.updateInfraction(id, updateData);
            if (!updatedInfraction) {
                return res.status(404).json({ message: "Infraction not found" });
            }
            res.json({ message: "Infraction updated successfully", updatedInfraction });
        } catch (error) {
            res.status(500).json({ message: "Error updating infraction", error: error.message });
        }
    },

    // Eliminar una infracción por ID
    deleteInfraction: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await infractionService.deleteInfraction(id);
            if (!deleted) {
                return res.status(404).json({ message: "Infraction not found" });
            }
            res.json({ message: "Infraction deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting infraction", error: error.message });
        }
    }
};

module.exports = infractionController;
