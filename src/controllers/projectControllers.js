const Project = require('../models/Project');

// Guardar un nuevo proyecto
const saveProject = async (req, res) => {
    try {
        const { title, description, link, imageUrl } = req.body;
        const newProject = new Project({ title, description, link, imageUrl });
        await newProject.save();
        res.status(201).json({ message: 'Proyecto guardado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el proyecto' });
    }
};

// Obtener todos los proyectos
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener proyectos' });
    }
};

module.exports = {
    saveProject,
    getProjects,
};