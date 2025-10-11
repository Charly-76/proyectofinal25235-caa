import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#eee', padding: '1rem 2rem', marginTop: '2rem', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} Mi Tienda Online. Todos los derechos reservados.</p>
      <p>Comisión 25235 React -- Talento Tech.</p>
       <p>Buenos Aires - Argentina.</p>
    </footer>
  );
};

export default Footer;
