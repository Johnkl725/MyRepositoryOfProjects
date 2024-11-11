const express = require('express');
const { getProjects, saveProject } = require('../controllers/projectControllers');
const router = express.Router();

// Ruta para obtener todos los proyectos
router.get('/projects', getProjects);

// Ruta para guardar un nuevo proyecto
router.post('/projects', saveProject);

module.exports = router;