const express = require('express');
const router = express.Router();
const infractionController = require('./infractionController');
const { authenticateToken } = require('../../middleware/authMiddleware');

// Rutas protegidas con autenticación
router.post('/', authenticateToken, infractionController.createInfraction);
router.get('/:id', authenticateToken, infractionController.getInfraction);
router.put('/:id', authenticateToken, infractionController.updateInfraction);
router.delete('/:id', authenticateToken, infractionController.deleteInfraction);
router.get('/policia/:policiaId', authenticateToken, infractionController.getInfractionsByPoliciaId);
router.get('/', authenticateToken, infractionController.getAllInfractions); // Agrega esta línea

module.exports = router;
