import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Importa estilos de AOS
import AOS from 'aos';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Inicializa AOS
AOS.init({
    duration: 1000, // Duración de la animación
    once: true, // Si la animación debe ocurrir solo una vez
});

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
