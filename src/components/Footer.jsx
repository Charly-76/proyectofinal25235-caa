// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#eee', padding: '1rem 2rem', marginTop: '2rem', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} Mi Tienda Online. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
