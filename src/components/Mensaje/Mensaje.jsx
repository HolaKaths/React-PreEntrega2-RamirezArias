import {useState} from "react";

const Mensaje = () => {
    const [mensaje, setMensaje] = useState (false) ;

    const manejadorMensaje = () => {
        setMensaje (!mensaje); 
    }
  return (
    <div>
      <button onClick={manejadorMensaje}>  {mensaje ? "Ocultar" : "Mostrar"} </button>
      {mensaje && <h2> Opción pet 1</h2>}
    </div>
  )
}

export default Mensaje
