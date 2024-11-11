import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="navbar"> {/* Aplicar la clase navbar del CSS */}
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="mx-3 text-white">
                    JohnDev Portafolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" className="nav-link" activeClassName="active">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/projects" className="nav-link" activeClassName="active">
                            Proyectos
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link" activeClassName="active">
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
