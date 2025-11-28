import React from 'react';
import ProductList from './ProductList';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

const Ofertas = () => {
  return (
    <div className="container">
      <h1 className="ofertas-title">
        <span className="ofertas-icon-wrapper">
          <FontAwesomeIcon icon={faTag} size="2x" className="ofertas-icon" />
        </span>
        Ofertas
      </h1>
      <ProductList category="men's clothing" />
    </div>
  );
};

export default Ofertas;

