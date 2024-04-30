const express = require('express');
const app = require('./src/app'); // Asegúrate de que la ruta a app.js es correcta

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
