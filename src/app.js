const express = require('express');
const userRoutes = require('./api/users/userRoutes');
const infractionRoutes = require('./api/infractions/infractionRoutes');
const vehicleRoutes = require('./api/vehicles/vehicleRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/infractions', infractionRoutes);
app.use('/api/vehicles', vehicleRoutes);

// Middleware para manejar errores
app.use(errorHandler);

module.exports = app;
