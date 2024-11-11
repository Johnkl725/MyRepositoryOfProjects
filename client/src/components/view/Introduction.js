import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';

const Introduction = () => {
    return (
        <Card className="text-left mb-3 p-4 shadow-sm" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <Card.Body className="d-flex align-items-center justify-content-between">
                {/* Texto a la izquierda */}
                <div>
                    <h1 className="display-4">
                        ¡Hola, soy JohnDev!
                    </h1>
                    <p className="lead">
                        Principiante en: Desarrollo de software, desarrollo web y análisis de datos.
                    </p>
                    <Button variant="primary" href="https://www.linkedin.com/in/john-luis-alberto-castillo-reupo-aa3125253/" target="_blank">
                        <FaLinkedin /> LinkedIn
                    </Button>
                </div>

                {/* Imagen circular a la derecha desde un link */}
                <div>
                    <img
                        src="https://media.licdn.com/dms/image/D4D03AQEl8LJbUsOl5A/profile-displayphoto-shrink_200_200/0/1704804255145?e=2147483647&v=beta&t=ZLRKiBW329z8HJ1OOLlkHH7HEwogspkOSd3xSClhsxc" // Cambia el enlace por el de tu imagen
                        alt="Perfil de John"
                        className="rounded-circle"
                        style={{ width: '150px', height: '150px' }} // Ajusta el tamaño de la imagen
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default Introduction;
