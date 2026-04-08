const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ message: "Microservicio Operativo - Despliegue Exitoso", status: "OK" });
});

app.get('/version', (req, res) => {
    res.json({ version: "1.0.0", env: "Development" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});