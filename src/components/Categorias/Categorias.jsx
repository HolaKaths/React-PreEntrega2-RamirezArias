import React, { useState, useEffect } from 'react';
import './Categorias.css'; 


const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    document.title = `Categoria ${categoria}`;
  }, [categoria]);
  

  const handleClick = (categoria) => {
    setCategoria(categoria);
  }

  return (
    <div className="container">
      <h2 className="title">Categorías de Productos</h2>
      <div className="containercat">
        <button className="catProducto" onClick={() => handleClick("Alimentos")}>Alimentos</button>
        <button className="catProducto" onClick={() => handleClick("Snacks")}>Snacks</button>
        <button className="catProducto" onClick={() => handleClick("Higiene")}>Higiene</button>
        <button className="catProducto" onClick={() => handleClick("Accesorios")}>Accesorios</button>
        <button className="catProducto" onClick={() => handleClick("Juguetes")}>Juguetes</button>
        <button className="catProducto" onClick={() => handleClick("Medicamentos")}>Suplementos</button>
      </div>
    </div>
  )
  
}

export default Categorias

