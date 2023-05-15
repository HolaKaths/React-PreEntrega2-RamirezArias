import './Item.css'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3> {nombre}</h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <button className='btnProducto'> Ver Detalles </button>
        </div>
    )
}

export default Item