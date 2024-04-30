const express = require('express');
const router = express.Router();
const infractionController = require('./infractionController');
const { authenticateToken } = require('../../middleware/authMiddleware');  // Asegúrate de que la ruta es correcta

// Rutas protegidas con autenticación
router.post('/', authenticateToken, infractionController.createInfraction);
router.get('/:id', authenticateToken, infractionController.getInfraction);
router.put('/:id', authenticateToken, infractionController.updateInfraction);
router.delete('/:id', authenticateToken, infractionController.deleteInfraction);

module.exports = router;
