import { useState, useEffect } from 'react'
import { getProducto} from '../../asyncMocks'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [Producto, setProducto] = useState([])

    useEffect(() => {
        getProducto()
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)

            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList Producto={Producto}/> 
        </div>
    )
}

export default ItemListContainer