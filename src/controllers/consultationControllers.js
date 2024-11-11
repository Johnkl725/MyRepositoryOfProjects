const Consultation = require('../models/Consultation');

// Guardar una nueva consulta
const saveConsultation = async (req, res) => {
    try {
        const newConsultation = new Consultation(req.body);
        await newConsultation.save();
        res.status(201).json({ message: 'Consulta guardada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar la consulta' });
    }
};


module.exports = {
    saveConsultation
};
