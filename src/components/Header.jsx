// src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar';

const Header = ({ cartItems }) => {
  return (
    <header style={{ backgroundColor: '#eee', padding: '1rem 2rem' }}>
      <h1>Mi Tienda Online</h1>
      <Navbar cartItems={cartItems} />
    </header>
  );
};

export default Header;
