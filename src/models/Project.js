const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: false },
    imageUrl: { type: String, required: true }, // Campo para el enlace de la imagen
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);