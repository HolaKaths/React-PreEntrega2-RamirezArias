import {useState, useEffect } from 'react'
import {getUnProducto} from '../../asyncmock'



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState (null);
    
    useEffect (() => {
        getUnProducto ()
        .then ( res => setProducto(res))
    }, [])
    
    return (
    <div>
      ItemDetailContainer 
    </div>
  )
}

export default ItemDetailContainer
