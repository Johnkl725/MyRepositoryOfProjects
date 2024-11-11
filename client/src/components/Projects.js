import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importa el ícono de enlace externo
import { fetchProjects } from '../api/api';
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener proyectos', error);
                setLoading(false);
            }
        };
        getProjects();
    }, []);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4 text-white">Mis Proyectos</h2>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <Spinner animation="border" className="text-white" />
                </div>
            ) : (
                <Row>
                    {projects.map((project, index) => (
                        <Col md={6} lg={4} key={index} data-aos="fade-up"> {/* Añadir data-aos="fade-up" */}
                            <Card className="mb-4 shadow-sm" style={{ backgroundColor: '#000', color: '#fff' }}> {/* Fondo negro y texto blanco */}
                                <Card.Img variant="top" src={project.imageUrl} alt={project.title} /> {/* Agregar imagen en la parte superior */}
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-between align-items-center" style={{ color: '#fff' }}>
                                        {project.title}
                                        <FaExternalLinkAlt className="text-primary" /> {/* Ícono de enlace externo */}
                                    </Card.Title>
                                    <Card.Text style={{ color: '#fff' }}>
                                        {project.description}
                                    </Card.Text>
                                    {index === 0 && (
                                        <Card.Link href={project.link} target="_blank" className="btn btn-primary btn-sm">
                                            Ver Proyecto <FaExternalLinkAlt />
                                        </Card.Link>
                                    )} {/* Solo el primer proyecto tiene el botón */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Projects;