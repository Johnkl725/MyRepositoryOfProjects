import React from 'react';
import { Card } from 'react-bootstrap';
import { FaLaptopCode, FaDatabase, FaChartBar, FaUser } from 'react-icons/fa'; // Importa iconos relevantes

const AboutMe = () => {
    return (
        <Card className="text-left text-white mb-3 p-4" style={{ backgroundColor: 'transparent' }}>
            <Card.Body>
                <Card.Title className="display-4">
                    <FaUser style={{ color: '#007bff', marginRight: '10px' }} /> {/* Ícono de persona */}
                    Sobre Mí
                </Card.Title>
                <Card.Text className="lead">
                    Hola, mi nombre es <strong>John Luis Alberto Castillo Reupo</strong>. Actualmente, estoy cursando el VI ciclo de la carrera de <strong>Ingeniería de Sistemas</strong>.
                </Card.Text>
                <Card.Text>
                    Me apasionan diversas áreas relacionadas con mi carrera, especialmente en el <strong>análisis de datos</strong> y el <strong>desarrollo web</strong>. Tengo conocimientos en:
                </Card.Text>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li><FaLaptopCode style={{ color: '#007bff', marginRight: '10px' }} />Programación</li>
                    <li><FaDatabase style={{ color: '#007bff', marginRight: '10px' }} />Manejo de SQL Server</li>
                    <li><FaChartBar style={{ color: '#007bff', marginRight: '10px' }} />Power BI y Microsoft Excel</li>
                </ul>
                <Card.Text>
                    Soy una persona que combina características <strong>introvertidas</strong> y <strong>extrovertidas</strong>, lo que me permite adaptarme bien a diferentes situaciones. Me encanta aprender, especialmente cuando tengo un guía que me oriente, y disfruto de ayudar a mis compañeros siempre que puedo.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default AboutMe;