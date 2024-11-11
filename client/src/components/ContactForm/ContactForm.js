import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import FormField from './FormField';
import ResponseMessage from './ResponseMessage';
import 'aos/dist/aos.css'; // Asegúrate de que AOS esté importado

const ContactForm = ({ formData, handleChange, handleSubmit, responseMessage, error }) => {
    const cardStyle = {
        backgroundColor: '#F5FFFA', // Menta claro
        color: '#000', // Texto negro para mejor legibilidad
        borderColor: '#000', // Borde negro para contraste
    };

    const buttonStyle = {
        backgroundColor: '#007bff', // Azul primario
        borderColor: '#007bff', // Borde azul primario
        color: '#fff', // Texto blanco
    };

    return (
        <Container className="my-5">
            <Card data-aos="fade-up" className="p-4 shadow" style={cardStyle}>
                <Card.Body>
                    <h2 className="text-center mb-4">Contáctame</h2>
                    {responseMessage && (
                        <ResponseMessage message={responseMessage} error={error} />
                    )}
                    <Form onSubmit={handleSubmit}>
                        <FormField
                            controlId="formName"
                            label="Nombre"
                            type="text"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <FormField
                            controlId="formEmail"
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-3"
                        />
                        <FormField
                            controlId="formMessage"
                            label="Mensaje"
                            as="textarea"
                            name="message"
                            placeholder="Escribe tu mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-3"
                        />
                        <Button variant="primary" type="submit" className="mt-4" style={buttonStyle}>
                            Enviar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ContactForm;