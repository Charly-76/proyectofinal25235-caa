import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <p>Productos en el carrito: {cartItems.length}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;

