import React, { useContext } from 'react';
import { Container, Table, Button, Badge } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'; 

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  // Disminuir cantidad
  const disminuirCantidad = (id) => {
    setCarrito(prev =>
      prev
        .map(producto => {
          if (producto.id === id) {
            return { ...producto, cantidad: producto.cantidad - 1 };
          }
          return producto;
        })
        .filter(producto => producto.cantidad > 0)
    );
  };

  // Aumentar cantidad respetando stock
  const aumentarCantidad = (id) => {
    setCarrito(prev =>
      prev.map(producto => {
        if (producto.id === id) {
          if (producto.cantidad < producto.stock) {
            return { ...producto, cantidad: producto.cantidad + 1 };
          }
        }
        return producto;
      })
    );
  };

  const total = carrito.reduce((acc, item) => acc + Number(item.price) * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <Container className="mt-5 text-center p-5 bg-light rounded shadow-sm carrito-vacio-container">
        <FontAwesomeIcon
          icon={faCartArrowDown}
          size="6x"
          className="mb-4 text-secondary carrito-vacio-icon"
        />
        <h3 className="fw-bold carrito-vacio-text">Tu carrito está vacío</h3>
        <p className="text-muted mt-2">
          ¡Agrega productos y empieza tu compra!
        </p>

        <style jsx>{`
          .carrito-vacio-container {
            transition: transform 0.3s;
          }
          .carrito-vacio-container:hover {
            transform: scale(1.02);
          }
          .carrito-vacio-icon {
            transition: color 0.3s, transform 0.3s;
          }
          .carrito-vacio-icon:hover {
            color: #00cfff;
            transform: rotate(-10deg);
          }
          .carrito-vacio-text {
            color: #333;
            text-shadow: 1px 1px 2px #aaa;
          }
        `}</style>
      </Container>
    );
  }

  return (
    <Container className="mt-4 rounded p-4 bg-light shadow-sm">
      <h3 className="mb-4">Carrito de compras</h3>
      <Table striped bordered hover responsive className="align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>
                {item.cantidad}{' '}
                {item.cantidad >= item.stock && (
                  <Badge bg="danger" className="ms-2">Stock agotado</Badge>
                )}
              </td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="me-2"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </Button>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => aumentarCantidad(item.id)}
                  disabled={item.cantidad >= item.stock}
                >
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end mt-3">Total a pagar: ${total.toFixed(2)}</h5>
    </Container>
  );
};

export default Carrito;
