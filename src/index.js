const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config({ path: './src/.env' });

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const consultationRoutes = require('./routes/consultationRoutes');
const projectRoutes = require('./routes/projectRoutes'); // Importa las rutas de proyectos
app.use('/api', consultationRoutes);
app.use('/api', projectRoutes); // Usa las rutas de proyectos

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});