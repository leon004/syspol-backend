const express = require('express');
const router = express.Router();
const userController = require('./userController');
const { authenticateToken } = require('../../middleware/authMiddleware');  

// Ruta para registrar un nuevo usuario (no necesita autenticación)
router.post('/register', userController.register);

// Ruta para autenticar un usuario (no necesita autenticación)
router.post('/login', userController.authenticate);

// Rutas protegidas con autenticación
router.get('/:id', authenticateToken, userController.getUser);
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);

module.exports = router;
