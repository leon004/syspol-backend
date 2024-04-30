const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Obtener el token del header de la solicitud
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401); // No hay token, no autorizado
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Token inválido
        }

        req.user = user; // Agregar información del usuario a la solicitud
        next(); // Pasar al siguiente middleware o controlador
    });
};

module.exports = { authenticateToken };
