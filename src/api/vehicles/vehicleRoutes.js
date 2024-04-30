const express = require('express');
const router = express.Router();
const vehicleController = require('./vehicleController');
const { authenticateToken } = require('../../middleware/authMiddleware');  // Asegúrate de que la ruta es correcta

// Rutas protegidas con autenticación
router.post('/', authenticateToken, vehicleController.createVehicle);
router.get('/:id', authenticateToken, vehicleController.getVehicle);
router.put('/:id', authenticateToken, vehicleController.updateVehicle);
router.delete('/:id', authenticateToken, vehicleController.deleteVehicle);

module.exports = router;
