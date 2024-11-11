import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';

const ContactFormContainer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/consultations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                setResponseMessage(data.message);
                setError(false);
            } else {
                setResponseMessage('Error al enviar la consulta. Intenta de nuevo.');
                setError(true);
            }
        } catch (err) {
            setResponseMessage('Error al enviar la consulta. Intenta de nuevo.');
            setError(true);
        }
    };

    return (
        <Container>
            <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                responseMessage={responseMessage}
                error={error}
            />
        </Container>
    );
};

export default ContactFormContainer;