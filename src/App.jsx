import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Layout cartItems={cart}>
        <Routes>
          <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isLoggedIn={true}>
                <Cart cartItems={cart} />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
