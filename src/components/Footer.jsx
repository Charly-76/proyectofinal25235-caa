import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <footer className="footer-wood text-white py-4 mt-4">
      <Container>
        <Row className="align-items-center">
          
          
          <Col md={4} className="text-start">
            <div className="d-flex align-items-center mb-1">
             
              <i className="fa fa-phone fa-lg me-2 animated-phone"></i>

              
              <span className="mx-2">+54 11 1234 5678</span>

              
              <a 
                href="https://wa.me/5491112345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa fa-whatsapp fa-lg"></i>
              </a>
            </div>
            <p className="mb-0">Mercado Free</p>
            <p className="mb-0">Av Cabildo 530 - CABA</p>
          </Col>

          
          <Col md={4} className="text-center">
            <p className="mb-0">© 2025 Todos los derechos reservados</p>
            <small>Talento Tech</small>
          </Col>

         
          <Col md={4} className="text-end">
            
            <a href="#" className="social-icon me-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.244 2h3.308l-7.227 8.26L24 22h-6.73l-5.29-6.932L5.95 22H2.64l7.73-8.835L0 2h6.91l4.713 6.238L18.244 2zm-1.168 18h1.833L7.144 4h-1.98l11.912 16z"/>
              </svg>
            </a>

            <a href="#" className="social-icon me-3">
              <i className="fa fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="social-icon me-3">
              <i className="fa fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="social-icon me-3">
              <i className="fa fa-youtube fa-2x"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
          </Col>
        </Row>
      </Container>

     
      <style jsx>{`
        .footer-wood {
          background-color: #8B5E3C; /* color madera claro */
        }

        .social-icon {
          color: white;
          transition: color 0.3s, transform 0.3s;
        }
        .social-icon:hover {
          transform: scale(1.2);
        }
        .social-icon:hover .fa-facebook { color: #3b5998; }
        .social-icon:hover .fa-instagram { color: #e4405f; }
        .social-icon:hover .fa-youtube { color: #ff0000; }
        .social-icon:hover .fa-linkedin { color: #0077b5; }
        .social-icon:hover svg { color: #000; } /* color X/Twitter al hover */
        .social-icon:hover .fa-whatsapp { color: #25D366; }

        /* Animación del teléfono */
        .animated-phone {
          animation: phonePulse 1s infinite alternate;
        }

        @keyframes phonePulse {
          0% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(-15deg) translateY(-2px); }
          100% { transform: rotate(15deg) translateY(2px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
