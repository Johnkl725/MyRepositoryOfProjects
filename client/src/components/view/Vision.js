import React from 'react';
import { Card } from 'react-bootstrap';
import { FaBullseye } from 'react-icons/fa'; // Icono de "objetivo"

const Vision = () => {
    return (
        <Card className="mb-5 p-4 shadow" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <Card.Body>
                <h1 className="display-4 mb-4">
                    <FaBullseye className="mr-3" style={{ color: '#007bff' }} /> {/* Icono de objetivo */}
                    Misión
                </h1>
                <p className="lead">
                    Mi objetivo a largo plazo es cumplir con el proyecto que se me solicite, colaborando siempre con el cliente, para mostrarle cómo progresa su proyecto.
                </p>
            </Card.Body>
        </Card>
    );
};

export default Vision;
