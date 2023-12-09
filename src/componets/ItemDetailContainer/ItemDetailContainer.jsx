import { useState, useEffect } from 'react'
import { getProductoById } from '../../asyncMocks'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [Producto, setProducto] = useState(null)
    const { itemId } = useParams()
    useEffect(() => {
        getProductoById(itemId)
        .then(response => {
            setProducto(response)
        })
        .catch(error=> {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...Producto}/>
        </div>
    )
}

export default ItemDetailContainer