const API_URL = process.env.REACT_APP_API_URL || 'https://mirepositorio.onrender.com/api';


// Función para enviar consultas
export const sendConsultation = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/consultations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Error al enviar la consulta');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error al enviar la consulta');
    }
};

// Función para obtener proyectos
export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) {
            throw new Error('Error al obtener proyectos');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error al obtener proyectos');
    }
};