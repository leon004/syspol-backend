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
router.get('/', authenticateToken, infractionController.getAllInfractions); 
router.get('/search', authenticateToken, infractionController.getInfractionsByPlateOrVin);
router.get('/by-plates', authenticateToken, infractionController.getInfractionsByPlates); // Nueva ruta

module.exports = router;
