import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar los productos');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
