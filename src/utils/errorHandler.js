const errorHandler = (err, req, res, next) => {
    // Definir un código de estado por defecto
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    // Enviar respuesta de error con estructura coherente
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};

module.exports = errorHandler;
