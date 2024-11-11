import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Education from './Education';
import Vision from './Vision';

const Home = () => {
    const containerStyle = {
        backgroundColor: '#191970', // Azul medianoche
        color: 'white', // Texto blanco para mejor legibilidad
        minHeight: '100vh', // Asegúrate de que cubra toda la altura de la ventana
        padding: '20px' // Añade un poco de padding para que el contenido no esté pegado a los bordes
    };

    return (
        <div style={containerStyle}> {/* Aplica los estilos en línea */}
            <Container className="my-5">
                <Row className="mb-5"> {/* Espaciado entre secciones */}
                    <Col md={6} data-aos="fade-up"> {/* Columna de la izquierda */}
                        <Introduction />
                    </Col>
                    <Col md={6} data-aos="fade-up"> {/* Columna de la derecha */}
                        <AboutMe />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col md={6} data-aos="fade-up"> {/* Columna de la izquierda */}
                        <Education />
                    </Col>
                    <Col md={6} data-aos="fade-up"> {/* Columna de la derecha */}
                        <Vision />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;