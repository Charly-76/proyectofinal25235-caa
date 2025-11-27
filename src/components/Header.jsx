import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const Header = () => {
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Navbar expand="lg" className="mb-4 futuristic-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="logo-metal me-2"></div>
          <span className="neon-title">Mercado Free</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="me-3 neon-link">Home</Nav.Link>
           <Nav.Link as={Link} to="/ofertas" className="me-3 neon-link">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/masvendidos" className="me-3 neon-link">Más Vendidos</Nav.Link>
            <Nav.Link as={Link} to="/infaltables" className="me-3 neon-link">Infaltables</Nav.Link>
             <Nav.Link as={Link} to="/nosotros" className="me-3 neon-link">Nosotros</Nav.Link>

            <div className="d-flex align-items-center">
              <Button variant="outline-light" as={Link} to="/administracion" className="me-3 neon-btn">
                Administración
              </Button>

              <Link to="/carrito" className="position-relative neon-cart">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="lg"
                  className={`cart-icon ${totalItems === 0 ? "text-secondary" : "text-white"}`}
                />
                {totalItems > 0 && (
                  <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .futuristic-navbar {
          background: linear-gradient(90deg, #87cefa, #00bfff);
          padding: 1rem 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        /* Logo metálico */
        .logo-metal {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(145deg, #ccc, #999, #fff);
          box-shadow: 0 0 15px #fff inset, 0 0 20px #999;
          animation: rotateShine 3s linear infinite;
        }

        @keyframes rotateShine {
          0% { transform: rotate(0deg); background-position: 0% 50%; }
          50% { transform: rotate(360deg); background-position: 100% 50%; }
          100% { transform: rotate(720deg); background-position: 0% 50%; }
        }

        /* Título neon */
        .neon-title {
          font-weight: bold;
          font-size: 1.8rem;
          color: #fff;
          text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
          transition: transform 0.3s, text-shadow 0.3s;
        }

        .neon-title:hover {
          transform: scale(1.2) rotate(-3deg);
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 80px #00ffff;
        }

        .neon-link {
          color: #fff !important;
          font-weight: 500;
          transition: text-shadow 0.3s, color 0.3s;
        }

        .neon-link:hover {
          color: #00ffff !important;
          text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff;
        }

        .neon-btn {
          font-weight: bold;
          border: 2px solid #00ffff;
          transition: transform 0.2s, box-shadow 0.3s;
        }

        .neon-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff inset;
          background-color: #00ffff;
          color: #000;
        }

        /* Carrito animado */
        .cart-icon {
          transition: transform 0.3s, color 0.3s, text-shadow 0.3s;
          animation: cartPulse 1s infinite alternate;
        }

        @keyframes cartPulse {
          0% { transform: translateY(0px) rotate(0deg); color: #fff; text-shadow: 0 0 5px #00ffff; }
          50% { transform: translateY(-5px) rotate(-5deg); color: #00ffff; text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; }
          100% { transform: translateY(0px) rotate(5deg); color: #0ff; text-shadow: 0 0 5px #00ffff, 0 0 15px #00ffff; }
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
