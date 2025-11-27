import React from 'react';
import ProductList from './ProductList';

const Infaltables = () => {
  return (
    <div className="container">
      <h1
  style={{
    fontFamily: 'Bebas Neue, sans-serif',
    fontSize: '3.5rem',
    textAlign: 'center',
    textShadow: '3px 3px 0px #ffe600',
    letterSpacing: '1px',
  }}
>
  ¡INFALTABLES!
</h1>

      <ProductList category="jewelery" />
    </div>
  );
};

export default Infaltables;