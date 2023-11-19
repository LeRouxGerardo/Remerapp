import { useState, useEffect } from 'react'
import { getProductoById } from '../../asyncMocks'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailContainer = () => {
    const [Producto, setProducto] = useState(null)
    useEffect(() => {
        getProductoById('1')
        .then(response => {
            setProducto(response)
        })
        .catch(error=> {
            console.error(error)
        })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...Producto}/>
        </div>
    )
}

export default ItemDetailContainer