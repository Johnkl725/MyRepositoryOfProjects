import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'; // Iconos de educación y certificaciones

const Education = () => {
    return (
        <Card className="mb-5 p-4 shadow" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <Card.Body>
                <h1 className="display-4 mb-4 text-white">
                    <FaGraduationCap className="mr-3" style={{ color: '#fff' }} /> {/* Icono en blanco */}
                    Educación
                </h1>
                <ul className="lead list-unstyled text-white">
                    <li className="mb-3">
                        <strong>Universidad Nacional Mayor de San Marcos</strong> - Ingeniería de Sistemas
                    </li>
                    <li className="mb-3">
                        <strong>Especialización de Analista de Datos</strong> - WE Educación Ejecutiva
                    </li>
                    <li className="mb-3">
                        <strong>Microsoft Excel</strong> - Certus
                    </li>
                    <li className="mb-3">
                        <strong>ICPNA</strong> - Inglés Intermedio
                    </li>
                </ul>

                <h1 className="display-4 mt-5 mb-4 text-white">
                    <FaCertificate className="mr-3" style={{ color: '#fff' }} /> {/* Icono en blanco */}
                    Certificaciones
                </h1>
                <ul className="lead list-unstyled text-white">
                    <li className="mb-3">
                        <strong>Certificación en Analista de Datos</strong> - W/E
                    </li>
                    <li className="mb-3">
                        <strong>Certificado en SQL Server</strong> - Data Analítica
                    </li>
                    <li className="mb-3">
                        <strong>Data Analytics con Python</strong> - Udemy
                    </li>
                    <li className="mb-3">
                        <strong>Fundamentos de Deep Learning</strong> - Nvidia Developer
                    </li>
                    <li className="mb-3">
                        <strong>Introducción al Desarrollo Web</strong> - Desafío Latam
                    </li>
                    <li className="mb-3">
                        <strong>Desarrollo de una App Full Stack</strong> - Desafío Latam
                    </li>
                    <li className="mb-3">
                        <strong>MS Office</strong> - CINFO
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

export default Education;
