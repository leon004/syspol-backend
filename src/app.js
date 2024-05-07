const express = require('express');
const cors = require('cors'); // Importa cors
const userRoutes = require('./api/users/userRoutes');
const infractionRoutes = require('./api/infractions/infractionRoutes');
const vehicleRoutes = require('./api/vehicles/vehicleRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Configuración de CORS
// Personaliza los valores según tus necesidades
app.use(cors({
    origin: 'http://localhost:4200', // Permite todos los dominios o especifica el tuyo
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos que quieres permitir
    credentials: true, // Habilita el soporte de cookies entre dominios
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/infractions', infractionRoutes);
app.use('/api/vehicles', vehicleRoutes);

// Middleware para manejar errores
app.use(errorHandler);
app.use((err, req, res, next) => {
    console.error(err.stack); // Imprime la pila de errores en la consola del servidor
    res.status(err.status || 500).send({
        message: err.message || 'An unexpected error occurred',
        error: err
    });
});

module.exports = app;
