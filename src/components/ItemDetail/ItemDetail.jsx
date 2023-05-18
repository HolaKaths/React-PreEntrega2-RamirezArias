import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className="itemDetailContainer">
            <h2> {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque eveniet delectus porro placeat veniam
                assumenda ipsum officiis id nobis laudantium perspiciatis optio, natus fugit hic! Tenetur unde cumque
                nesciunt. Cumque!</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail;

