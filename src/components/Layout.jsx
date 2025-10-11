import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cartItems }) => {
  return (
    <>
      <Header cartItems={cartItems} />
      <main style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
