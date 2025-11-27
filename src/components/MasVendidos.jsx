import React, { useEffect, useState } from "react";


const MasVendidos = () => {
  const [productos, setProductos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6") // solo 6 productos
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % productos.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + productos.length) % productos.length);
  };

  return (
     <div className="contenedor-mas-vendidos" style={{ textAlign: "center", margin: "40px 0" }}>
       <h2 style={{
        fontSize: "2rem",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
      }}>
        <span className="llama" role="img" aria-label="fuego" style={{ fontSize: "2.5rem" }}>🔥</span>
        Más Vendidos
      </h2>
      <div className="carrusel">
        <button className="btn-carrusel" onClick={prevSlide}>❮</button>

        <div className="carrusel-ventana">
          <div
            className="carrusel-inner"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {productos.map((p) => (
              <div className="card-producto" key={p.id}>
                <img src={p.image} alt={p.title} />
                <h3>{p.title}</h3>
                <p>${p.price}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-carrusel" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default MasVendidos;
