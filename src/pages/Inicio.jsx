import React from 'react';
import ProductList from '../components/ProductList';
import '../App.css'; 

const Inicio = () => {
  return (
    <div className="container">
      <h1 className="neon-title">Todos los productos</h1>
      <ProductList />
    </div>
  );
};

export default Inicio;
