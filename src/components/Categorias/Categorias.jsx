import React, { useState, useEffect } from 'react';


const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    document.title = `Categoria ${categoria}`;
  }, [categoria]);
  

  const handleClick = (categoria) => {
    setCategoria(categoria);
  }

  return (
    <div>

      <h2> Categorías de Productos </h2>
      <button onClick={() => handleClick("Alimentos")}> Alimentos </button>
      <button onClick={() => handleClick("Snacks")}> Snacks </button>
      <button onClick={() => handleClick("Higiene")}> Higiene </button>
      <button onClick={() => handleClick("Accesorios")}> Accesorios </button>
      <button onClick={() => handleClick("Juguetes")}> Juguetes </button>
      <button onClick={() => handleClick("Medicamentos")}> Medicamentos libres </button>

    </div>
  )
}

export default Categorias

