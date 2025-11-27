import React from "react";
import { Container, Card } from "react-bootstrap";

export default function Nosotros() {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-sm rounded text-center">
        <h1
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '4rem',
            color: '#00cfff', 
            textShadow: '2px 2px 5px #000, 0 0 10px #00cfff',
            marginBottom: '1rem'
          }}
        >
          React Js - Comisión 25235
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Somos una tienda comprometida con la calidad y la satisfacción de nuestros clientes.
          Aquí encontrarás productos seleccionados cuidadosamente para ti, con la mejor experiencia de compra online.
        </p>
      </Card>
    </Container>
  );
}
