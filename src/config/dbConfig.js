const { PrismaClient } = require('@prisma/client');

// Crear una instancia de PrismaClient
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Opcional: configurar logging de Prisma
});

module.exports = prisma;
