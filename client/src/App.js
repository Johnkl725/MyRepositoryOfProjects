import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import Projects from './components/Projects';
import ContactFormContainer from './components/containers/ContactFormContainer';
import NavigationBar from './components/Navbar'; // Importa el componente de navegación
import { Container } from 'react-bootstrap';
import { FaCode } from 'react-icons/fa'; // Importa el ícono de desarrollador web

function App() {
    const footerStyle = {
        backgroundColor: '#191970', // Azul medianoche
        color: 'white', // Texto blanco
        textAlign: 'center', // Centrar el texto
        padding: '10px 0', // Padding superior e inferior
        position: 'relative', // Cambiar a relative para evitar problemas de superposición
        bottom: 0,
        width: '100%'
    };

    return (
        <Router>
            <NavigationBar /> {/* Usar el componente de navegación aquí */}
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<ContactFormContainer />} />
                </Routes>
            </Container>
            <footer style={footerStyle}>
                <p>
                    &copy; {new Date().getFullYear()} JohnDev. Todos los derechos reservados. <FaCode />
                </p>
            </footer>
        </Router>
    );
}

export default App;