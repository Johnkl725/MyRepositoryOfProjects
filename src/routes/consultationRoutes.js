const express = require('express');
const { saveConsultation, getConsultations } = require('../controllers/consultationControllers');
const router = express.Router();

// Ruta para guardar una nueva consulta
router.post('/consultations', saveConsultation);

// // Ruta para obtener todas las consultas
// router.get('/consultations', getConsultations);

module.exports = router;
