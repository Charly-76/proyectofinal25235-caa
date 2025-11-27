import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';
import '../App.css';


const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const { agregarAlCarrito } = useContext(CartContext);

  // Función para mezclar productos
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const shuffled = shuffleArray(data); // Mezcla los productos

        setProducts(shuffled);
        setFilteredProducts(shuffled);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  const handleFilter = () => {
    let filtered = products;

    if (minPrice !== '') {
      filtered = filtered.filter((p) => p.price >= parseFloat(minPrice));
    }

    if (maxPrice !== '') {
      filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice));
    }

    setFilteredProducts(filtered);
  };

  const handleClear = () => {
    setMinPrice('');
    setMaxPrice('');
    setFilteredProducts(products);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Form className="mb-4 p-3 filter-card shadow-sm rounded">
        <Row className="align-items-end">
          <Col md={3}>
            <Form.Label>Mínimo</Form.Label>
            <Form.Control
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Ej: 10"
            />
          </Col>

          <Col md={3}>
            <Form.Label>Máximo</Form.Label>
            <Form.Control
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Ej: 100"
            />
          </Col>

          <Col md="auto">
            <Button variant="primary" onClick={handleFilter}>
              Filtrar
            </Button>
          </Col>

          <Col md="auto">
            <Button variant="secondary" onClick={handleClear}>
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
            </Col>
          ))
        ) : (
          <div
  className="mt-4 text-center"
  style={{
    fontFamily: 'Inter, sans-serif',
    fontSize: '1.15rem',
    color: '#6c757d'
  }}
>
  <i className="bi bi-emoji-frown fs-3 d-block mb-2"></i>
  No hay productos en este rango de precios.
</div>


        )}
      </Row>
    </>
  );
};

export default ProductList;

