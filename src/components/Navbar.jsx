import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/">Inicio</Link> |{' '}
      <Link to="/about">Nosotros</Link> |{' '}
      <Link to="/cart">Carrito ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;
