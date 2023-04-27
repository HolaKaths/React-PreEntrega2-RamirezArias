import './Vista.css';
import { useState } from 'react';


const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

    return (
        <div className={estilo}>
            <button onClick={cambiarModo}>  {modoOscuro ? "Claro" : "Oscuro"} </button>
            <h2> ¿Qué hay en la tienda Pet? </h2>
            <p> Aquí podrás encontrar todos los productos para el cuidado y la alimentación tus mascotas
            </p>
            <br />
        </div>
    )
}

export default Vista
