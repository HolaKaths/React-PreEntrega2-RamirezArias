import { useState } from "react";


const ItemCount = () => {
    const [contador, setContador] = useState(1);

    const aumentar = () => {
        setContador(contador + 1);

    }

    const reducir = () => {
        setContador(contador - 1);

    }

    return (
        <div>
            <button onClick={reducir}> - </button>
            <p> {contador} </p>
            <button onClick={aumentar}> + </button>
        </div>
    )
}

export default ItemCount
